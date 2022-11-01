import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Show.module.scss'
import Link from 'next/link'
import Layout from '../components/layout'
import xml2js from 'xml2js'
import { unescape } from 'querystring'

export async function getServerSideProps(context: any) {
    // Fetch data from external API
    var parseString = require('xml2js').parseString;
    const router = context
    async function showFeedData(show:any) {
        const showFeedRes = await fetch(show.feedUrl)
        const showDataa = await showFeedRes.text()

        var parser = new xml2js.Parser(/* options */);
        let xml = await parser.parseStringPromise(showDataa).then(function (result) {
            return result
        })
        .catch(function (err) {
        // Failed
        });

        return xml.rss.channel[0].description[0]
    }
    

    const episodesRes = await fetch(`https://itunes.apple.com/lookup?id=${router.query.id}&entity=podcastEpisode&limit=100`)
    const episodesData = await episodesRes.json()
    const returnShowData = episodesData.results[0]
    const feedResult = await showFeedData(episodesData.results[0])
    // Pass data to the page via props
    let returnEpisodesData = episodesData.results.slice(1)


    return { props: { returnShowData, returnEpisodesData, feedResult } }
}

interface Props {
  returnShowData: any;
  returnEpisodesData: Array<object>;
  feedResult: String;
}

const show: NextPage<Props> = (props) => {

    let { returnShowData, returnEpisodesData, feedResult} = props;
    let episodes: any = returnEpisodesData
    let blurImgUrl = returnShowData.artworkUrl100.replace('100x100', '10x10')
    let priority = true

    return (
        <Layout>
            <div className={styles.showPageContainer}>
                <div className={styles.showInfo}>
                    <Image src={returnShowData.artworkUrl600} alt={returnShowData.name} priority width={600} height={600} placeholder="blur" blurDataURL={blurImgUrl}/>
                    <div className={styles.showInfoInner}>
                        <h1>
                            <span>{returnShowData.collectionName}</span>
                            <span>{returnShowData.artistName}</span>
                        </h1>
                        <p>{returnShowData.trackCount} Episodes</p>
                        <p>{feedResult.replace(/<\/?[^>]+>/gi, '')}</p>
                    </div>
                </div>
                <div className={styles.showEpisodesContainer}>
                    {episodes.map((value: any, index: any) => {
                        const releaseDate = new Date(value.releaseDate).toLocaleDateString('en-us', { month:"short", day:"numeric", year:"numeric"})
                        let podcastHourLength = value.trackTimeMillis / 3600000
                        podcastHourLength = Math.floor(podcastHourLength)
                        let podcastMinuteLength = Math.floor((value.trackTimeMillis % 3600000) / 60000)
                        let podcastLengthString = ""
                        if (podcastHourLength >= 1) {
                            podcastLengthString = podcastHourLength + " hr " + podcastMinuteLength + " min"
                        } else {
                            podcastLengthString = podcastMinuteLength + " min"
                        }
                        return (
                            <div key={value.trackId}>
                                <p>{releaseDate}</p>
                                <p>{value.trackName}</p>
                                <p>{value.shortDescription}</p>
                                <a href={value.episodeUrl}>Episode Link</a>
                                <audio controls>
                                    <source src={value.episodeUrl} type="audio/mpeg"></source>
                                    Your browser does not support the audio element.
                                </audio>
                                <p>{podcastLengthString}</p>
                            </div> 
                    )
                            
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

export default show
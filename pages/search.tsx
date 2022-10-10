import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import searchStyles from '../styles/Search.module.scss'
import Link from 'next/link'
import Layout from '../components/layout'

export async function getServerSideProps(context) {
    // Fetch data from external API
    const router = context
    const res = await fetch(`https://itunes.apple.com/search?term=${router.query.term}&entity=podcast`)
    const data = await res.json()
    // Pass data to the page via props
    let returnData = data.results
    console.log(router.query.term)
    return { props: { returnData } }
}


const search: NextPage = (props) => {
    return (
        <Layout>
                {props.returnData.map((value, index) => {
                    return (
                        <div key={value.collectionId}>
                            <a href={value.collectionViewUrl}><img className={searchStyles.thumb} src={value.artworkUrl600} />
                            <p>{value.collectionName}</p>
                            <p>{value.artistName}</p>
                            <p>Episodes: {value.trackCount}</p>
                            </a>
                        </div>
                       
                    );   
                        
                    })
                }

        </Layout>
    )
}

export default search

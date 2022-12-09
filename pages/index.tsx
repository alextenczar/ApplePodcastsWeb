import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Layout from '../components/layout'
import CountrySelect from '../components/countrySelect'
import Image from 'next/image'

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  let countryCode = 'us'
  const res = await fetch(`https://rss.applemarketingtools.com/api/v2/${countryCode}/podcasts/top/50/podcasts.json`)
  const data = await res.json()
  // Pass data to the page via props
  let returnData: Array<object>
  returnData = data.feed.results
  return { props: { returnData, countryCode }  }
}

interface Props {
  returnData: Array<object>;
  countryCode?: String;
}

const Home: NextPage<Props> = (props) => {

  
  let { returnData, countryCode } = props
  return (  
  <Layout>
    <h2><label>Top Shows In:</label></h2>   
    <CountrySelect country={{countryCode}}></CountrySelect>
    <div className={styles.showContainer}>
      {returnData.map((value: any, index: any) => {
        let imgUrl = value.artworkUrl100.replace('100x100', '300x300')
        let blurImgUrl = value.artworkUrl100.replace('100x100', '10x10')
        let showId = value.id
        let imagePriority = false;
        if(index <= 20) {
          imagePriority = true;
        }

        return (
          <div className={styles.showItem} key={value.id}>
            <Link href={{ pathname: `/show`, query: { id: showId } }}>
            <div className={styles.thumbContainer}>
              <div className={styles.thumb}>
                <Image className={styles.thumb} src={imgUrl} alt={value.name} width={300} height={300} priority={imagePriority} placeholder="blur" blurDataURL={blurImgUrl}/>
              </div>
            </div>    
                <p className={styles.podcastName}>{value.name}</p>
                <p className={styles.podcastAuthor}>{value.artistName}</p>
            </Link>
          </div>
        );
      })
      }
    </div>
    </Layout>
  )
}

export default Home

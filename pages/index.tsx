import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Layout from '../components/layout'
import SearchBar from '../components/SearchBar'

import { NextRequest, NextResponse, userAgent } from 'next/server'


export function middleware(request: NextRequest) {
  let location = request?.geo?.country
  return { props: { location } }
}

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const router = context
  const res = await fetch(`https://rss.applemarketingtools.com/api/v2/us/podcasts/top/50/podcasts.json`)
  const data = await res.json()
  // Pass data to the page via props
  let returnData: Array<object>
  returnData = data.feed.results
  //console.log(returnData)
  return { props: { returnData }  }
}

interface Props {
  returnData: Array<object>;
  location: String;
}


const Home: NextPage<Props> = (props) => {

  
  let { returnData, location } = props;

  console.log(location)

  return (
    <Layout>
      <Link href={{pathname: `/search`, query: { term: 'test' } }}>
          <a>Click Here</a>
      </Link>
      
      <SearchBar></SearchBar>
      <h2>Top Shows</h2>
      <div className={styles.showContainer}>
      {returnData.map((value: any, index: any) => {
        let imgUrl = value.artworkUrl100.replace('100x100', '600x600') 
        return (
          <div className={styles.showItem} key={value.id}>
            <a href={value.collectionViewUrl}><img className={styles.thumb} src={imgUrl} />
              <p>{value.name}</p>
              <p>{value.artistName}</p>
            </a>
          </div>
        );
      })
      }
      </div>

    </Layout>
  )
}

export default Home

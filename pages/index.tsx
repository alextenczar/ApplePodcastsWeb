import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Layout from '../components/layout'
import CountrySelect from '../components/countrySelect'

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
    <Link href={{ pathname: `/search`, query: { term: 'test' } }}>
      <a>Click Here</a>
    </Link>
      <h2>Top Shows</h2>
    <CountrySelect country={{countryCode}}></CountrySelect>
    <div className={styles.showContainer}>
      {returnData.map((value: any, index: any) => {
        let imgUrl = value.artworkUrl100.replace('100x100', '300x300')
        let showId = value.id
        return (
          <div className={styles.showItem} key={value.id}>
            <Link href={{ pathname: `/show`, query: { id: showId } }}>
              <a>
                <img className={styles.thumb} src={imgUrl} />
                <p>{value.name}</p>
                <p>{value.artistName}</p>
              </a>
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

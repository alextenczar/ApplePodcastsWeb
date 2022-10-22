import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Layout from '../components/layout'
import SearchBar from '../components/SearchBar'
import CountrySelect from '../components/countrySelect'
import { url } from 'inspector'
import { NextResponse } from 'next/server'
import { useRouter } from 'next/router'

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const router = context
  let countriesArr = ["dz","ao","ai","ag","ar","am","au","at","az","bs","bh","bb","by","be","bz","bj","bm","bt","bo","ba","bw","br","vg","bg","kh","cm","ca","cv","ky","td","cl","cn","co","cr","hr","cy","cz","ci","cd","dk","dm","do","ec","eg","sv","ee","sz","fj","fi","fr","ga","gm","ge","de","gh","gr","gd","gt","gw","gy","hn","hk","hu","is","in","id","iq","ie","il","it","jm","jp","jo","kz","ke","kr","xk","kw","kg","la","lv","lb","lr","ly","lt","lu","mo","mg","mw","my","mv","ml","mt","mr","mu","mx","fm","md","mn","me","ms","ma","mz","mm","na","np","nl","nz","ni","ne","ng","mk","no","om","pa","pg","py","pe","ph","pl","pt","qa","cg","ro","ru","rw","sa","sn","rs","sc","sl","sg","sk","si","sb","za","es","lk","kn","lc","vc","sr","se","ch","tw","tj","tz","th","to","tt","tn","tr","tm","tc","ae","ug","ua","gb","us","uy","uz","vu","ve","vn","ye","zm","zw"]
  let countryCode = 'us'
  if (context.req.cookies.locale !== undefined && countriesArr.includes(context.req.cookies.locale)) {
    countryCode = context.req.cookies.locale
  }
  if (router.query.locale !== undefined && countriesArr.includes(router.query.locale)) {
    countryCode = router.query.locale
  }
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
  //console.log(returnData)
  return (  
  <Layout>
    <Link href={{ pathname: `/search`, query: { term: 'test' } }}>
      <a>Click Here</a>
    </Link>
    <SearchBar></SearchBar>
      <h2>Top Shows</h2>
    <CountrySelect country={{countryCode}}></CountrySelect>
    <div className={styles.showContainer}>
      {returnData.map((value: any, index: any) => {
        let imgUrl = value.artworkUrl100.replace('100x100', '600x600')
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

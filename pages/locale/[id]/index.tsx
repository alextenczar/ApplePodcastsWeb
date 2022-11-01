import type { NextPage } from 'next'
import styles from '../../../styles/Home.module.scss'
import Link from 'next/link'
import Layout from '../../../components/layout'
import CountrySelect from '../../../components/countrySelect'
import Image from 'next/image'

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const router = context
  const id = router.query.id as string
  let countriesArr = ["dz","ao","ai","ag","ar","am","au","at","az","bs","bh","bb","by","be","bz","bj","bm","bt","bo","ba","bw","br","vg","bg","kh","cm","ca","cv","ky","td","cl","cn","co","cr","hr","cy","cz","ci","cd","dk","dm","do","ec","eg","sv","ee","sz","fj","fi","fr","ga","gm","ge","de","gh","gr","gd","gt","gw","gy","hn","hk","hu","is","in","id","iq","ie","il","it","jm","jp","jo","kz","ke","kr","xk","kw","kg","la","lv","lb","lr","ly","lt","lu","mo","mg","mw","my","mv","ml","mt","mr","mu","mx","fm","md","mn","me","ms","ma","mz","mm","na","np","nl","nz","ni","ne","ng","mk","no","om","pa","pg","py","pe","ph","pl","pt","qa","cg","ro","ru","rw","sa","sn","rs","sc","sl","sg","sk","si","sb","za","es","lk","kn","lc","vc","sr","se","ch","tw","tj","tz","th","to","tt","tn","tr","tm","tc","ae","ug","ua","gb","us","uy","uz","vu","ve","vn","ye","zm","zw"]
  let countryCode = 'us'

  if (id !== undefined && countriesArr.includes(id)) {
    countryCode = id
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

const LocaleHome: NextPage<Props> = (props) => {

  let { returnData, countryCode } = props
  return (  
  <Layout>
    <div className={styles.headerSelect}>
      <h2>Top Shows In:</h2>    
      <CountrySelect country={{countryCode}}></CountrySelect>
    </div>
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
                <Image className={styles.thumb} src={imgUrl} alt={value.name} width={300} height={300} priority={imagePriority} placeholder="blur" blurDataURL={blurImgUrl}/>
                <p>{value.name}</p>
                <p>{value.artistName}</p>
            </Link>
          </div>
        );
      })
      }
    </div>

    </Layout>
  )
}

export default LocaleHome

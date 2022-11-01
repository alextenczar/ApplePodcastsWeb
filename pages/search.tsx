import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import searchStyles from '../styles/Search.module.scss'
import Link from 'next/link'
import Layout from '../components/layout'

export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const router = context
    const res = await fetch(`https://itunes.apple.com/search?term=${router.query.term}&entity=podcast`)
    const data = await res.json()
    // Pass data to the page via props
    let returnData = data.results
    return { props: { returnData } }
}

interface Props {
  returnData: Array<object>;
}


const search: NextPage<Props> = (props) => {

    let { returnData} = props;
    

    return (
        <Layout>
                <div className={styles.showContainer}>
                {returnData.map((value: any, index: any) => {
                    let imgUrl = value.artworkUrl100.replace('100x100', '300x300')
                    let blurImgUrl = value.artworkUrl100.replace('100x100', '10x10')
                    let priority = true
                    
                    return (
                        <div className={styles.showItem} key={value.collectionId}>
                            <Link href={{pathname: `/show`, query: {id: value.trackId} }}>
                                <span>
                                    <div className={searchStyles.thumb}><Image src={imgUrl} alt={value.name} priority width={300} height={300} placeholder="blur" blurDataURL={blurImgUrl}/></div>
                                    <p>{value.collectionName}</p>
                                    <p>{value.artistName}</p>
                                    <p>Episodes: {value.trackCount}</p>
                                </span>
                            </Link>
                        </div>
                    )   
                        
                    })
                }
                </div>

        </Layout>
    )
}

export default search

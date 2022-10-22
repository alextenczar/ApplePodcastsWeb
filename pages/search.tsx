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
    //console.log(router.query.term)
    return { props: { returnData } }
}

interface Props {
  returnData: Array<object>;
}


const search: NextPage<Props> = (props) => {

    let { returnData} = props;
    

    return (
        <Layout>
                {returnData.map((value: any, index: any) => {
                    return (
                        <div key={value.collectionId}>
                            <Link href={{pathname: `/show`, query: {id: value.trackId} }}>
                                <span>
                                    <img className={searchStyles.thumb} src={value.artworkUrl600} />
                                    <p>{value.collectionName}</p>
                                    <p>{value.artistName}</p>
                                    <p>Episodes: {value.trackCount}</p>
                                </span>
                            </Link>
                        </div>
                       
                    )   
                        
                    })
                }

        </Layout>
    )
}

export default search

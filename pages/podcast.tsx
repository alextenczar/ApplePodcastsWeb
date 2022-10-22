import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import Image from 'next/image'

export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const router = context
    const res = await fetch(`https://itunes.apple.com/search?term=${router.query}&entity=podcast`)
    const data = await res.json()
    // Pass data to the page via props
    let returnData = data.results
    return { props: { returnData } }
}

interface Props {
    returnData: Array<object>;
}

const podcast: NextPage<Props> = (returnData: any) => {
    return (
        <Layout>
            {returnData.map((value: any, index: any) => {
                    let imgUrl = value.artworkUrl100.replace('100x100', '300x300')
                    let blurImgUrl = value.artworkUrl100.replace('100x100', '10x10')
                    let showId = value.id
                    let priority = true
                return (
                    <div key={value.collectionId}>
                        {value.collectionName}
                        <Image src={value.artworkUrl00} alt={value.name} priority={priority} loading="eager" width={300} height={300} layout="responsive" placeholder="blur" blurDataURL={blurImgUrl}/>
                    </div>

                );

            })
            }
        </Layout>
    )
}

export default podcast

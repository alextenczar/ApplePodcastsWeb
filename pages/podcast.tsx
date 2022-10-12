import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/layout'
import { useRouter } from 'next/router'

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
                return (
                    <div key={value.collectionId}>
                        {value.collectionName}
                        <img src={value.artworkUrl600} />
                    </div>

                );

            })
            }
        </Layout>
    )
}

export default podcast

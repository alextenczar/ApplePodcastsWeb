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


const Home: NextPage = (props) => {
    return (
        <Layout>
            {props.returnData.map((value, index) => {
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

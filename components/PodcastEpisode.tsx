export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://itunes.apple.com/lookup?id=1529775938&media=podcast&entity=podcastEpisode&limit=100`)
    const data = await res.json()
    console.log(data)
    // Pass data to the page via props
    return { props: { data } }
}

// This gets called on every request


export default function PodcastShow( data: any ) {
    return (
        <div>
            
        </div>
    );
}
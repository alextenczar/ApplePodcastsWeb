import Head from 'next/head'
import styles from '../styles/Home.module.scss'



export default function Layout({ children }: { children: JSX.Element|JSX.Element[]} ) {
    return (
        <div className={styles.container}>
              <Head>
                    <title>Apple Podcast Search</title>
                    <meta name="description" content="Search For Apple Podcasts" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            
        <main className={styles.main}>
            { children }
        </main>

        <footer className={styles.footer}>
            <a
                href="https://alextenczar.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Built By Alex Tenczar
            </a>
            </footer>
            
        </div>
    )
}
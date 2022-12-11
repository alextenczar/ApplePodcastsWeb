import Head from 'next/head'
import styles from '../styles/Layout.module.scss'
import Nav from '../components/Nav'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Layout({ children }: { children: JSX.Element|JSX.Element[]} ) {
    return (
        <div className={`${styles.container} ${inter.className}`}>
              <Head>
                    <title>Apple Podcast Search</title>
                    <meta name="description" content="Search For Apple Podcasts" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                </Head>

        <Nav></Nav>           
        
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
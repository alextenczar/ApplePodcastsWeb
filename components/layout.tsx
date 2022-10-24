import Head from 'next/head'
import styles from '../styles/Layout.module.scss'
import Nav from '../components/Nav'



export default function Layout({ children }: { children: JSX.Element|JSX.Element[]} ) {
    return (
        <div className={styles.container}>
              <Head>
                    <title>Apple Podcast Search</title>
                    <meta name="description" content="Search For Apple Podcasts" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" /> 
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
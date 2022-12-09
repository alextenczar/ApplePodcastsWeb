import React, { createRef, Suspense, useState } from 'react';
import { useRouter } from 'next/router'
import search from '../pages/search';
import styles from '../styles/Nav.module.scss'
import Link from 'next/link'
import SearchBar from '../components/SearchBar'


export default function Nav(props: any) {

    const router = useRouter()
    let searchText = ""
    
    let searchValue = createRef<HTMLInputElement>();

    function handleSubmit(e: any) {

        e.preventDefault();
        const searchTerm = "/search?" + "term=" + searchValue?.current?.value.replace(/\s/g, '-');
        router.push(searchTerm);
    } 


    return (
        <nav className={styles['nav-container']}>
            <div className={styles['nav-inner']}>
                <div className='nav-title-container'>
                    <span className={styles['nav-title']}><Link className={styles['nav-title']} href='/'>Apple Podcasts</Link><span className={styles['nav-sub-title']}> Web</span></span>
                </div>
                <div className={styles['nav-search-container']}>
                    <SearchBar/>
                </div>
            </div>
        </nav>
    );
}

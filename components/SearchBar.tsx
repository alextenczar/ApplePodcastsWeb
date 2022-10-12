import React, { createRef, Suspense, useState } from 'react';
import { useRouter } from 'next/router'
import search from '../pages/search';


export default function SearchBar(props: any) {

    const router = useRouter()
    let searchText = ""
    
    let searchValue = createRef<HTMLInputElement>();

    function handleSubmit(e: any) {

        e.preventDefault();
        const searchTerm = "/search?" + "term=" + searchValue?.current?.value.replace(/\s/g, '-');
        router.push(searchTerm);
    } 


    return (
        <form id="search-bar" onSubmit={handleSubmit} autoComplete="off">
            <input id="search-box" type="text" ref={searchValue} placeholder=""></input>
        </form>
    );
}

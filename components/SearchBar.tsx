import React, { createRef, Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import styles from '../styles/SearchBar.module.scss'


export default function Nav(props: any) {

    const [isOpen, setOpen] = useState(false);



    useEffect(() => {

        const documentBody = document.body
        documentBody.classList.add('closed')
        const toggleClass = () => {
            setOpen(!isOpen);
            if(isOpen == false) {
                documentBody.classList.remove('closed')
                documentBody.classList.add('open')
            } else {
                documentBody.classList.remove('open')
                documentBody.classList.add('closed')
            }
        };

        const searchButtons = document.querySelectorAll(".search-icon-button, .close-icon-button")

        searchButtons.forEach(element => {
            element.addEventListener('click', function(){
            toggleClass()
            });
        });
    })
    

    
    const router = useRouter()
    let searchText = ""
    
    let searchValue = createRef<HTMLInputElement>();

    function handleSubmit(e: any) {

        e.preventDefault();
        const searchTerm = "/search?" + "term=" + searchValue?.current?.value.replace(/\s/g, '-');
        router.push(searchTerm);
    }


    return (
        <div className={` ${styles['searchbar-inner-container']}`}>
                <button className="search-icon-button">
                    <AiOutlineSearch className={styles['searchbar-icon']}/>
                </button>
                <form className={`${'searchbar-form'} `} id="search-bar" onSubmit={handleSubmit} autoComplete="off">
                    <input id="search-box" type="text" ref={searchValue} placeholder="Search for a podcast"></input>
                </form>
                <button className="close-icon-button">
                    <AiOutlineClose className={`${'searchbar-close'} ${styles['searchbar-close']}`}/>
                </button>
        </div>
    );
}

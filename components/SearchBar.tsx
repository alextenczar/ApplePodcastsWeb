import { Suspense, useState } from 'react';
import { useRouter } from 'next/router'

export default function SearchBar(props) {
    const router = useRouter()
    let searchText = ""
    const [searchValue, setSearchValue] = useState('');

    function handleSubmit(e) {
        const { history } = props;
        e.preventDefault();
        const searchTerm = "/search?" + "term=" + searchValue.replace(/\s/g, '-');
        router.push(searchTerm);
    } 


    return (
        <form id="search-bar" onSubmit={handleSubmit} autoComplete="off">
            <input id="search-box" type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder=""></input>
        </form>
    );
}

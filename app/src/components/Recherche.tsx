import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Recherche = () => {
    const navigate = useNavigate();    
    const [searchText, setSearchText] = useState("");  

    const searchQuote = async() => {
        navigate(`/searchResults?q=${searchText}`);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchQuote();
        }
      }

    return (
        <form className="w-fit overflow-hidden rounded flex flex-row items-center">
            <input type="text" className="rounded" value={searchText} onChange={(e) => setSearchText(e.target.value)} name="q" /> 
            <MagnifyingGlassIcon className="size-5 -ml-8 z-5 stroke-4 cursor-pointer" onClick={searchQuote} onKeyDown={handleKeyDown}/>
        </form>
    );
 }

export default Recherche

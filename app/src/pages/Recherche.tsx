import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const Recherche = () => {
    const navigate = useNavigate();    
    const [searchText, setSearchText] = useState("");  

    const searchQuote = async() => {
        navigate(`/searchResults?q=${searchText}`);
    }

    return (
        <div className="search">
            <h2 className="text-xl">Recherche:</h2>
            <form className="w-max">
                <p className="flex gap-3">
                    <input type="text" className="outline" value={searchText} onChange={(e) => setSearchText(e.target.value)} name="q" /> 
                    <input type="submit" value="Search"  onClick={searchQuote} />
                </p>
            </form>
        </div>
    );
 }

export default Recherche

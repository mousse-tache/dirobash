import React, { useState, useEffect } from "react"
import QuotesClient from "../utils/quotesClient"
import Quotes from "../components/quotes"
import { Link, useSearchParams } from "react-router-dom"

const QuotePage = () => {    
    const [quote, setQuote] = useState({text: "Nothing to see here", date: new Date().toLocaleDateString(), number: 0})
      
    const [searchParams] = useSearchParams();

    useEffect(() => {    
        async function FetchQuote() {
            try {
                const quoteClient = new QuotesClient();  

                let {data} = await quoteClient.getQuoteByNumber(searchParams.get("number") ?? 1)  
                
                if (data?.data !== null) {
                    setQuote(data.data);
                }
            } catch (error) {
                console.log("Oh well, we didn't even need those quotes anyways")
            }
        }

        FetchQuote();
    }, [])

    return (
    <>
        <Quotes quotes={[quote]} />
        <div className="pagination">
            <p>
                <Link to="/">Retour</Link>
            </p>
        </div>
    </>
    );
}

export default QuotePage

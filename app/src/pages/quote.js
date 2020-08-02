import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import QuotesClient from "../utils/quotesClient"
import { useLocation } from "@reach/router"
import Quotes from "../components/quotes"
import { parse } from "query-string"

const QuotePage = () => {
    const location = useLocation()
    const [quote, setQuote] = useState({text: "Nothing to see here", date: new Date().toLocaleDateString(), number: 0})
    
    const quoteClient = new QuotesClient("");

    async function FetchQuote() {
        try {
            var searchParams = parse(location.search) 
            var data = await quoteClient.getQuoteByNumber(searchParams.number)  
            
            if (data !== null) {
                setQuote(data);
            }
        } catch (error) {
            console.log("Oh well, we didn't even need those quotes anyways")
        }
    }

    useEffect(() => {    
        FetchQuote();
    }, [])

    return (
    <Layout>
        <Quotes quotes={[quote]} />
    </Layout>
    );
}

export default QuotePage

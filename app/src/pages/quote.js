import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import QuotesClient from "../utils/quotesClient"
import { useLocation } from "@reach/router"
import Quotes from "../components/quotes"
import { parse } from "query-string"

const QuotePage = () => {
    const location = useLocation()
    const [quote, setQuote] = useState({text: "Nothing to see here", date: new Date().toLocaleDateString(), number: 0})
    var searchParams = parse(location.search)
    
    console.log(location)
    console.log(searchParams)



    const quoteClient = new QuotesClient();

    useEffect(() => {
        if(!searchParams?.number) {
            return;
        }
        try {
            var data = quoteClient.getQuoteByNumber(searchParams.number)
    
            if(data !== null) {
                setQuote(data);
            }
            
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
    <Layout>
        <Quotes quotes={[quote]} />
    </Layout>
    );
}

export default QuotePage

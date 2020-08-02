import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Quotes from "../components/quotes"
import QuotesClient from "../utils/quotesClient"

const IndexPage = () => {
  const quotesClient = new QuotesClient("");

    const [quotes, setQuotes] = useState([{text: "Nothing to see here", date: new Date().toLocaleDateString(), number: 0}]);

    async function FetchQuotes() {
        try {
            var data = await quotesClient.getQuotes();

            if (data !== null && data.length > 0) {
                setQuotes(data);
            }
        } catch (error) {
            console.log("Oh well, we didn't even need those quotes anyways")
        }
    }

    useEffect(() => {
        FetchQuotes();
    }, [])

  return (
  <Layout>
    <Quotes quotes={quotes} />
  </Layout>
  )
}

export default IndexPage

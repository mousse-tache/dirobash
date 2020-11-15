import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import Quotes from "../components/quotes"
import QuotesClient from "../utils/quotesClient"
import { useQueryParam, NumberParam } from "use-query-params";

const IndexPage = () => {
  const quotesClient = new QuotesClient("");

    const [quotes, setQuotes] = useState([{text: "Nothing to see here", date: new Date().toLocaleDateString(), number: 0}]);
    const [page, setPage] = useQueryParam("page", NumberParam);

    async function FetchQuotes() {
        try {
            var data = await quotesClient.getQuotes(page);

            if (data !== null && data.length > 0) {
                setQuotes(data);
            }
        } catch (error) {
            console.log("Oh well, we didn't even need those quotes anyways")
        }
    }

    useEffect(() => {
        FetchQuotes();
    }, [page])

  return (
  <Layout>
    <Quotes quotes={quotes} />
    <Pagination currentPage={page} setPage={setPage} />
  </Layout>
  )
}

export default IndexPage

import React, { useState, useEffect } from "react"
import Pagination from "../components/pagination"
import Quotes from "../components/quotes"
import QuotesClient from "../utils/quotesClient"
import { useSearchParams } from "react-router-dom";

const IndexPage = () => {
  const quotesClient = new QuotesClient();

    const [quotes, setQuotes] = useState([{text: "Nothing to see here", date: new Date().toLocaleDateString(), number: 0}]);
    const [count, setCount] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    async function FetchQuotes() {
        try {
            let { data } = await quotesClient.getQuotes(searchParams.get("page")?? 1);

            if (data.data !== null && data.data.length > 0) {
                setQuotes(data.data);
            }

            if (data.count !== null && data.count > 1) {
              setCount(data.count);
          }
        } catch (error) {
            console.log("Oh well, we didn't even need those quotes anyways")
        }
    }

    async function setPage(pageNumber: string) {
      setSearchParams({"page":pageNumber})
    }

    useEffect(() => {
        FetchQuotes();
    }, [searchParams])

  return (
  <>
    <Quotes quotes={quotes} />
    <Pagination currentPage={parseInt(searchParams.get("page") ?? "1")} count={count} setPage={setPage} />
  </>
  )
}

export default IndexPage

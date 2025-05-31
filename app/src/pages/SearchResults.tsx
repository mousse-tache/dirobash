import React, { useState, useEffect } from "react"
import Pagination from "../components/pagination"
import Quotes from "../components/Quotes"
import QuotesClient from "../utils/quotesClient"
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
    const [quotes, setQuotes] = useState([{text: "Nothing to see here", date: new Date().toLocaleDateString(), number: 0}]);
    const [count, setCount] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    async function setPage(pageNumber: string) {
      setSearchParams({"page":pageNumber})
    }

    useEffect(() => {
        async function FetchQuotes() {
          try {
              let searchText = searchParams.get("q");

              if(!searchText) {
                return;
              }

              const quotesClient = new QuotesClient();
              let { data } = await quotesClient.searchQuotes(searchText);

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

      FetchQuotes();
    }, [searchParams])

  return (
  <>
    <Quotes quotes={quotes} />
    <Pagination currentPage={parseInt(searchParams.get("page") ?? "1")} count={count} setPage={setPage} />
  </>
  )
}

export default SearchResults

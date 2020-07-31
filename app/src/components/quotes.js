import React, { useState, useEffect } from "react";
import QuotesClient from "../utils/quotesClient"
import Quote from "./quote";

const Quotes = () => {
    const quotesClient = new QuotesClient("");

    const [quotes, setQuotes] = useState([{text: "Nothing to see here", date: new Date().toLocaleDateString(), number: 0}]);

    async function FetchQuotes() {
        try {
            var data = await quotesClient.getQuotes();

            if (data !== null) {
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
        <div className="quotes">
            {quotes.map(x => <Quote quote={x} />)}
        </div>
    );
}

export default Quotes;
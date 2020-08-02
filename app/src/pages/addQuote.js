import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import QuotesClient from "../utils/quotesClient";

const AddQuote = () => {
    const quoteClient = new QuotesClient();
    const [quote, setQuote] = useState({text:"", date: new Date(), number: 0});

    const setNumber = async() => {
        var nb = await quoteClient.getQuotes().length;
        setQuote({...quote, number: nb+1});
    }

    useEffect(() => {
        setNumber();
    }, [])

    const submitQuote = async() => {
        await setNumber();

        await quoteClient.submitQuote(quote);
        navigate("/");
    }

    return (
    <Layout>
        <div className="add">
            <form>
                <h2>Ajout d'une citation:</h2>
                <p>
                    <textarea rows="10" cols="80" name="quote" value={quote.text} onChange={(e) => setQuote({...quote, text: e.target.value})} /><br />
                    <input type="button" value="Add Quote" onClick={submitQuote} />
                </p>
            </form>
        </div>
    </Layout>
    );
 }

export default AddQuote

import React, { useState } from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import QuotesClient from "../utils/quotesClient";

const AddQuote = () => {
    const quoteClient = new QuotesClient();
    const [quote, setQuote] = useState("");

    const submitQuote = async() => {
        await quoteClient.submitQuote(quote);
        navigate("/");
    }

    return (
    <Layout>
        <div className="add">
            <form>
                <h2>Ajout d'une citation:</h2>
                <p>
                    <textarea rows="10" cols="80" name="quote" value={quote} onChange={(e) => setQuote(e.target.value)} /><br />
                    <input type="button" value="Add Quote" onClick={submitQuote} />
                </p>
            </form>
        </div>
    </Layout>
    );
 }

export default AddQuote

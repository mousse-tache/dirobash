import React, { useState } from "react"
import QuotesClient from "../utils/quotesClient";
import { useNavigate } from "react-router-dom";

const AddQuote = () => {
    const navigate = useNavigate();
    const quoteClient = new QuotesClient();
    let [quote, setQuote] = useState("");

    const getNumber = async() => {
        let { data } = await quoteClient.getQuotes(1);
        return data.data[0].number+1;
    }

    const submitQuote = async() => {
        let number = await getNumber();

        await quoteClient.submitQuote({text: quote, number, date: new Date()});
        navigate("/");
    }

    return (
        <div className="add">
            <form>
                <h2 className="text-xl font-bold">Ajout d'une citation:</h2>
                <p>
                    <textarea rows={10} cols={80} name="quote" className="outline" value={quote} onChange={(e) => setQuote(e.target.value)} /><br />
                    <input type="button" value="Add Quote" onClick={submitQuote} />
                </p>
            </form>
        </div>
    );
 }

export default AddQuote

import React, { useState } from "react"
import QuotesClient from "../utils/quotesClient";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

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
        <Card>
            <form>
                <h2 className="text-xl font-bold text-center">Ajout d'une citation:</h2>
                <p className="text-center">
                    <textarea rows={10} cols={80} name="quote" className="drop-shadow-md outline m-auto w-7/10" value={quote} onChange={(e) => setQuote(e.target.value)} /><br />
                    <input type="button" value="Add Quote" onClick={submitQuote} />
                </p>
            </form>
        </Card>
    );
 }

export default AddQuote

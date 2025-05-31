import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Quote = ({
    quote
  }: {
    quote: {date: Date, text: String, number: Number}
  }): React.ReactElement => {

    if(!quote) {
        return;
    }

    // this was to consider imported quotes on the previous database;
    // var date = (quote?.number < 952 && quote?.number !== 0) || quote?.date >= "2020-05-01" ? new Date(quote?.date).toISOString() : quote?.date;

    let date = new Date(quote?.date).toISOString();

    return (
        <Card className="whitespace-pre-line flex flex-col divide-y-2 divide-gray-200 gap-2">
            <blockquote className="p-2">
                {quote?.text}
            </blockquote>
            <p className="flex gap-1 p-2">
                <Link to={`/quote?number=${quote?.number}`}>#{quote?.number}</Link> 
                -
                <span className="date">{date}</span>
            </p>
        </Card>
    )
}

export default Quote;
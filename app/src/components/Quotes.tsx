import React from "react";
import Quote from "./Quote";

const Quotes = ({
    quotes
  }: {
    quotes: [{date: Date, text: String, number: Number}]
  }): React.ReactElement => {

    return (
        <div className="gap-5 flex flex-col align-center justify-between opacity-85">
            {quotes.map(x => <Quote key={x.number} quote={x} />)}
        </div>
    );
}

export default Quotes;
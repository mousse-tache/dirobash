import React from "react";
import Quote from "./quote";

const Quotes = ({quotes}) => { 

    return (
        <div className="quotes">
            {quotes.map(x => <Quote key={x.number} quote={x} />)}
        </div>
    );
}

export default Quotes;
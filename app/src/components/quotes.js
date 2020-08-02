import React from "react";
import Quote from "./quote";

const Quotes = ({quotes}) => { 

    return (
        <div className="quotes">
            {quotes.map(x => <Quote quote={x} />)}
        </div>
    );
}

export default Quotes;
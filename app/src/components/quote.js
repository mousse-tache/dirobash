import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Quote = ({quote}) => { 

    if(!quote) {
        return 
    }

    // this was to consider imported quotes on the previous database;
    // var date = (quote?.number < 952 && quote?.number !== 0) || quote?.date >= "2020-05-01" ? new Date(quote?.date).toISOString() : quote?.date;

    let date = new Date(quote?.date).toISOString();

    return (
        <div className="quote">
            <blockquote>
            <div>
                {quote?.text}
            </div>
            </blockquote>
            <p className="flex gap-1">
                <Link to={`/quote?number=${quote?.number}`}>#{quote?.number}</Link> 
                -
                <span className="date">{date}</span>
            </p>
        </div>
    )
}

Quote.propTypes = {
    quote: PropTypes.object
}


export default Quote;
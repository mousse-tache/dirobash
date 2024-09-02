import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Quote = ({quote}) => { 

    if(!quote) {
        return 
    }

    var date = quote?.number < 952 && quote?.number !== 0 ? new Date(quote?.date).toISOString() : quote?.date;

    return (
        <div className="quote">
            <blockquote>
            <div>
                {quote?.text}
            </div>
            </blockquote>
            <p>
                <Link to={`/quote?number=${quote?.number}`}>#{quote?.number}</Link> - <span className="date">{date}</span>
            </p>
        </div>
    )
}

Quote.propTypes = {
    quote: PropTypes.object
}


export default Quote;
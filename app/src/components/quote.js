import React from "react";
import { Link } from "gatsby"
import PropTypes from "prop-types";

const Quote = ({quote}) => { 

    if(!quote) {
        return 
    }

    var date = quote?.number < 952 && quote?.number !== 0 ? new Date(new Date(quote?.date).getTime()*1000).toISOString() : quote?.date;

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
import React from "react";
import { Link } from "gatsby"
import PropTypes from "prop-types";

const Quote = ({quote}) => { 

    if(!quote) {
        return 
    }

    return (
        <div className="quote">
            <blockquote>
            <div>
                {quote?.text}
            </div>
            </blockquote>
            <p>
                <Link to="/quote">#{quote?.number}</Link> - <span className="date">{quote?.date}</span>
            </p>
        </div>
    )
}

Quote.propTypes = {
    quote: PropTypes.object
}


export default Quote;
import React from "react";
import PropTypes from "prop-types";

const Quote = ({quote}) => { 

    return (
        <div class="quote">
            <blockquote>
            <div>
                {quote?.text}
            </div>
            </blockquote>
            <p>
                <a href="/quote/951.html">{quote?.number}</a> - <span class="date">{quote?.date}</span>
            </p>
        </div>
    )


}

Quote.propTypes = {
    quote: PropTypes.object
}


export default Quote;
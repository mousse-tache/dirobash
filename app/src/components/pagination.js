import React, { useEffect, useState } from "react"

const Pagination = ({currentPage, setPage, count}) => {
    const [lowerRange, setLowerRange] = useState([])
    const [higherRange, setHigherRange] = useState([])
    const [maxPage, setMaxPage] = useState(Math.round(count/20)+1)

    const defineRanges = () => {
        var newLowerRange = []
        var newHigherRange = []

        for (let index = currentPage - 4; index < currentPage; index++) {
            if (index < 1) {
                continue;
            }

            newLowerRange.push(index)            
        }

        for (let index = currentPage + 1; index <= currentPage + 4; index++) {
            if (index > maxPage) {
                continue;
            }

            newHigherRange.push(index)            
        }

        setLowerRange(newLowerRange)
        setHigherRange(newHigherRange)
    }

    useEffect(() => {
        if(!currentPage) {
            setPage(1)
        }

        defineRanges()
    }, [currentPage, count])
    
    return (
        <div className="pagination">
            <p>
                <span>Page: </span>
                {currentPage <= 1 && <span className="first">«</span>}
                {currentPage <= 1 && <span className="previous">&lt;</span>}
                {currentPage > 1 && <a className="first" onClick={() => setPage(1)}>«</a>}
                {currentPage > 1 && <a className="previous" onClick={() => setPage(currentPage-1)}>&lt;</a>}                
                {lowerRange.map(x => <a key={x} onClick={() => setPage(x)}>{x}</a>)}
                <span className="current">{currentPage}</span>
                {higherRange.map(x => <a key={x} onClick={() => setPage(x)}>{x}</a>)}
                {currentPage < maxPage && <a className="next" onClick={() => setPage(currentPage+1)}>&gt;</a>}
                {currentPage >= maxPage && <span className="next">&gt;</span>}
                {currentPage < maxPage && <a className="last" href={`?page=${maxPage}`}>»</a>}
            </p>
        </div>
    )
}

export default Pagination
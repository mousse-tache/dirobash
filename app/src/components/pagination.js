import React, { useEffect, useState } from "react"

const Pagination = ({currentPage, setPage, count}) => {
    const [lowerRange, setLowerRange] = useState([])
    const [higherRange, setHigherRange] = useState([])
    const [maxPage] = useState(Math.round(count/20)+1)    

    useEffect(() => {
        const defineRanges = () => {
            if(!currentPage) {
                setPage(1)
            }
    
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

        defineRanges()
    }, [currentPage, maxPage, setPage])
    
    return (
        <div className="m-5 text-center">
            <p className="flex flex-row gap-1 justify-center">
                {currentPage <= 1 && <span className="previous">&lt;</span>}
                {currentPage > 1 && <a className="first no-underline hover:underline decoration-solid" href={`?page=1`}>«</a>}
                {currentPage > 1 && <a className="previous no-underline hover:underline decoration-solid" href={`?page=${currentPage-1}`}>&lt;</a>}                
                {lowerRange.map(x => <a className="no-underline hover:underline decoration-solid" key={x} href={`?page=${x}`}>{x}</a>)}
                <span className="current">{currentPage}</span>
                {higherRange.map(x => <a className="no-underline hover:underline decoration-solid" key={x} href={`?page=${x}`}>{x}</a>)}
                {currentPage < maxPage && <a className="next no-underline hover:underline decoration-solid" href={`?page=${currentPage+1}`}>&gt;</a>}
                {currentPage >= maxPage && <span className="next">&gt;</span>}
                {currentPage < maxPage && <a className="last no-underline hover:underline decoration-solid" href={`?page=${maxPage}`}>»</a>}
            </p>
        </div>
    )
}

export default Pagination
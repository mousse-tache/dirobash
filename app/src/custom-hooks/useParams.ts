import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

function useParams(): URLSearchParams {
    const [searchParams] = useSearchParams();
    return searchParams;
}

function useSearchParameter(parameter: string) {
    let searchParams = useParams();

    const [searchParameter, setSearchParameter] = useState(searchParams.get(parameter))

    useEffect(() => {
        setSearchParameter(searchParams.get(parameter));
    }, [searchParams, parameter])

    return searchParameter;
}

export { useSearchParameter };

export default useParams;
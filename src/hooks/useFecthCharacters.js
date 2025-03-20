import { useEffect, useState } from "react";

const useApiHook = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch(() => setData(null))
    }, [url]);

    return data;
};

export default useApiHook;
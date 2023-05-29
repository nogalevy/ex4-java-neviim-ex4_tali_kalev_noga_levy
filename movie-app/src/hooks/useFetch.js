import { useState, useEffect } from 'react';
import axios from "axios";

/**
 * @param url
 * @returns {{data: unknown, isPending: boolean, error: unknown}}
 */
export default function useFetch(url){
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>  {
            try{
                const res = await axios(url);

                const dataToReturn = res.data
                setData(dataToReturn);
                setError(null);
            }catch(err){
                setError(err.message);
            }finally{
                setIsPending(false)
            }
        }
        fetchData();
    }, [url])

    return { data, isPending, error };
}

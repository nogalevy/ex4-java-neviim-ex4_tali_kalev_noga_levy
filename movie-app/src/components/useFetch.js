import { useState, useEffect } from 'react';
import axios from "axios";

export default function useFetch(url){
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const fetchData = async () =>  {
            try{
                console.log("INFETCH", url)
                const res = await axios(url);

                const dataToReturn = res.data
                setData(dataToReturn);
                setError(null);
            }catch(err){
                setError(err.message);
                console.log(err)
            }finally{
                setIsPending(false)
            }
        }
        fetchData();
    }, [url])

    return { data, isPending, error };
}

import { useState, useEffect } from 'react';
import axios from "axios";


const API_KEY = "3285bfe9a9135db7c2dc2f19ede60c9a";
const DOMAIN = "https://api.themoviedb.org/3";

export default function useFetch(url){
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        const fetchData = async () =>  {
            try{
                console.log("INFETCH", url)
                const res = await axios(DOMAIN + url + `&api_key=` + API_KEY);

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

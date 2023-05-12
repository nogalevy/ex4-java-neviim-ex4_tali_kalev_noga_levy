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
                // const res = await axios(`${DOMAIN}/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`);
                const res = await axios(DOMAIN + url + `&api_key=` + API_KEY);

                setData(res.data.results);
                setError(null);
                console.log(res.data.results);
            }catch(err){
                setError(err.message);
                console.log(err)
            }finally{
                setIsPending(false)
            }
        }
        fetchData(); //Tali: odd no then ? ahhhhhhhh
    }, [url])

    return { data, isPending, error };
}

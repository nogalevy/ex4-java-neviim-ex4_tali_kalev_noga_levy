import {useEffect, useState} from "react";
import {InputTypes} from "../consts/consts";
import {useMoviesContext} from "../contexts/MoviesContext";
import useFetch from "./useFetch";

const TRENDING_PAGE = '/trending/all/week?&language=en-US';
// const TRENDING_PAGE ='/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99'
export default function SearchInput({inputType}){
    const [url, setUrl] = useState(TRENDING_PAGE)
    const [submitInput, setSubmitInput] = useState('');
    const { error, isPending, data } = useFetch(url);
    const {setMoviesData} = useMoviesContext()

    //validate by input

    useEffect(()=>{
        setMoviesData({error, isPending, data})
    },[error, isPending, data])

    const handleSubmit = (e) => {
        e.preventDefault();
        let u;
        if (inputType === InputTypes.TITLE){
            u = `/search/multi?query=${submitInput}&include_adult=false&language=en-US&page=1`
        }
        else if(inputType === InputTypes.YEAR){
            u = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${submitInput}&sort_by=primary_release_date.desc`
        }
        setUrl(u);
        setSubmitInput('')
    }

    return(
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder={`Search by ${inputType}`} aria-label="Search"
                   required value={submitInput} onChange={(e) => setSubmitInput(e.target.value)}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

    );
}
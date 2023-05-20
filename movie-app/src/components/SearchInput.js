import {useEffect, useReducer, useState} from "react";
import {InputTypes, TRENDING_PAGE} from "../consts/consts";
import {useMoviesContext} from "../contexts/MoviesContext";
import useFetch from "./useFetch";
import { useNavigate  } from "react-router-dom";
import historyReducer from "./historyReducer"


// const TRENDING_PAGE = '/trending/all/week?&language=en-US';
// const TRENDING_PAGE ='/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99'
export default function SearchInput({inputType, clearGenres}) {
    const [url, setUrl] = useState(TRENDING_PAGE)
    const [submitInput, setSubmitInput] = useState('');
    const {error, isPending, data} = useFetch(url);
    const {setMoviesData} = useMoviesContext()
    const navigate = useNavigate ();
    const [historyState, historyDispatch] = useReducer(historyReducer, {history : []});
    const [showDropdown, setShowDropdown] = useState(false)

    //validate by input

    useEffect(() => {
        setMoviesData({error, isPending, data})
    }, [error, isPending, data])

    const handleURL = () => {
        let u;
        if (inputType === InputTypes.TITLE) {
            u = `/search/multi?query=${submitInput}&include_adult=false&language=en-US&page=1`
        } else if (inputType === InputTypes.YEAR) {
            u = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${submitInput}&sort_by=primary_release_date.desc`
        }
        setUrl(u);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/'); //if not on home page -> navigates to home
        handleURL();
        historyDispatch({ type: 'add', payload: submitInput });
        setSubmitInput('')
        clearGenres()
        setShowDropdown(false)
        console.log("history:", historyState.history)
    }

    const handleClick = () => {
        console.log("search bar clicked")
        setShowDropdown(true)
    }

    const renderDropdown = () => {
        return(
            <div className="dropdown-menu-dark absolute mt-1 w-full p-2 bg-white shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto">
                {historyState.history.map((item) => {
                return (
                <li>
                <a className="dropdown-item" href="#">
                <p>{item}</p>
                </a>
                </li>
                )
            })}
            </div>
        )
    }

    return (
        <div className="container-fluid">
        {/*<div className="dropdown">*/}
        {/*    <a className="dropdown-toggle" href="\" role="button" data-bs-toggle="dropdown"*/}
        {/*       aria-expanded="false">*/}
        {/*    </a>*/}
        <form className="d-flex input-box form-floating mb-3" role="search" onSubmit={handleSubmit}>
            <input className="form-control" type="search" placeholder={`Search by ${inputType}`}
                   aria-label="Search"
                   id="searchBar"
                   required value={submitInput} onChange={(e) => setSubmitInput(e.target.value)}
                    onClick={handleClick}/>
            <label htmlFor="searchBar">{`Search by ${inputType}`}</label>
            {/*TODO: NOGA: TALI: i dont kknow how to say it in inglesh*/}
            <i className="fa fa-search"></i>
        </form>
            {/*{showDropdown && renderDropdown()}*/}
            <ul className="dropdown-menu">
                {renderDropdown()}
            </ul>
        {/*</div>*/}
        </div>
    );
}
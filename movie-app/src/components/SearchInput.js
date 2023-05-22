import {useReducer, useState} from "react";
import {InputTypes, Action} from "../consts/consts";
import listReducer from "../reducers/listReducer";

export default function SearchInput({inputType, genreDispatch, setUrl}) {
    const [submitInput, setSubmitInput] = useState('');
    const [historyState, historyDispatch] = useReducer(listReducer, {list : []});
    const [showDropdown, setShowDropdown] = useState(false)

    //validate by input

    const handleURL = () => {
        let u;
        if (inputType === InputTypes.TITLE) {
            u = `/search/multi?query=${submitInput}&include_adult=false&language=en-US&page=1`
        } else if (inputType === InputTypes.YEAR) {
            u = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${submitInput}&sort_by=popularity.desc`
        }
        setUrl(u);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleURL();
        historyDispatch({ type: Action.ADD, payload: submitInput });
        setSubmitInput('')
        genreDispatch({ type: Action.CLEAR});
        setShowDropdown(false)
        console.log("history:", historyState.list)
    }

    const handleClick = () => {
        console.log("search bar clicked")
        setShowDropdown(true)
    }

    const renderDropdown = () => {
        // return(
        //     // <div className="dropdown-menu-dark absolute mt-1 w-full p-2 bg-white shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto">
        //     // <div className={`dropdown-menu ${showDropdown ? "show" : ""}`} >
        //         {historyState.history.map((item) => {
        //         return (
        //         <li>
            //         <a className="dropdown-item" href="#">
            //            <p onClick={(e)=>{console.log(e.target)}}>{item}</p>
            //         </a>
        //         </li>
        //         )
        //     })}

        return historyState.list.map((item, index) => {
            return (
                <li>
                    <a className="dropdown-item" onClick={(e)=>{setSubmitInput(item); handleURL()}} href="#">
                        <div className="form-check">
                            <input className="form-check-input"
                                   onChange={(e)=>{console.log(e.target)}}
                                   type="checkbox"
                                   checked={false} value="" id={item}/>
                            <label className="form-check-label" htmlFor={item}>{item}</label>
                        </div>
                    </a>
                </li>
            )
        })
            // </div>

    }

    return (
        <form  className="nav-item dropdown" role="search" onSubmit={handleSubmit}>
        {/*<li className="nav-item dropdown">*/}
            <input type="search" className="text-dark nav-link dropdown-toggle form-control"
                   // role="button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false"
                   placeholder={`Search by ${inputType}`}
                   required
                   value={submitInput} onChange={(e) => setSubmitInput(e.target.value)}
            >
            </input>
            <ul className="dropdown-menu">
                {renderDropdown()}
            </ul>
        </form>
        // <div className="container-fluid" >
        // {/*<div className="dropdown">*/}
        // {/*    <a className="dropdown-toggle" href="\" role="button" data-bs-toggle="dropdown"*/}
        // {/*       aria-expanded="false">*/}
        // {/*    </a>*/}
        // <form className="d-flex input-box form-floating" role="search" onSubmit={handleSubmit}>
        //     <input className="form-control dropdown-toggle" type="search" placeholder={`Search by ${inputType}`}
        //            aria-label="Search"
        //            id="searchBar"
        //            autoComplete="off"
        //            required value={submitInput} onChange={(e) => setSubmitInput(e.target.value)}
        //             onClick={handleClick}
        //            onBlur={(e)=> {console.log(e.target); /*setShowDropdown(false)*/}}
        //     // data-bs-toggle="dropdown"
        //     //        aria-expanded="false"
        //                />
        //     <label htmlFor="searchBar">{`Search by ${inputType}`}</label>
        //     {/*TODO: NOGA: TALI: i dont kknow how to say it in inglesh*/}
        //     <i className="fa fa-search"></i>
        // </form>
        //     <div >
        //
        //     {showDropdown && renderDropdown()}
        //     </div>
        //     {/*<ul className="dropdown-menu">*/}
        //     {/*    {renderDropdown()}*/}
        //     {/*</ul>*/}
        // {/*</div>*/}
        // </div>

    );
}
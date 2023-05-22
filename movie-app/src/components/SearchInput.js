import {useEffect, useReducer, useState} from "react";
import {InputTypes, Action} from "../consts/consts";
import listReducer from "../reducers/listReducer";

export default function SearchInput({inputType, genreDispatch, setUrl}) {
    const [submitValue, setSubmitValue] = useState('');
    const [historyState, historyDispatch] = useReducer(listReducer, {list : []});

    useEffect(() => {
        setSubmitValue('');
    },[inputType]);

    const handleURL = () => {
        let u;
        if (inputType === InputTypes.TITLE) {
            u = `/search/multi?query=${submitValue}&include_adult=false&language=en-US&page=1`
        } else if (inputType === InputTypes.YEAR) {
            u = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${submitValue}&sort_by=popularity.desc`
        }
        setUrl(u);
    }

    const addToHistory = () => {
        if (!historyState.list.includes(submitValue)){
            historyDispatch({ type: Action.ADD, payload: submitValue });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleURL();
        addToHistory();
        setSubmitValue('')
        genreDispatch({ type: Action.CLEAR});
        console.log("history:", historyState.list)
    }
    const renderDropdown = () => {
        const reversedList = historyState.list.slice().reverse();

        return reversedList.map((item, index) => {
            return (
                <li key={index}>
                    <a className="dropdown-item" onClick={(e) => { setSubmitValue(item); handleURL(); }} href="#">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                onChange={(e) => { console.log(e.target); }}
                                type="checkbox"
                                checked={false}
                                value=""
                                id={item}
                            />
                            <label className="form-check-label" htmlFor={item}>{item}</label>
                        </div>
                    </a>
                </li>
            );
        });
    };


    const handleInputChange = (e) => {
        if(inputType === InputTypes.YEAR && containsNonNumericCharacter(e.target.value)) return
        setSubmitValue(e.target.value)
    }

    function containsNonNumericCharacter(str) {
        return /\D/.test(str);
    }

    return (
        <form  className="nav-item dropdown" role="search" onSubmit={handleSubmit}>
            <input type="search" className="text-dark nav-link dropdown-toggle form-control"
                   data-bs-toggle="dropdown"
                   aria-expanded="false"
                   placeholder={`Search by ${inputType}`}
                   required
                   value={submitValue} onChange={(e) => {handleInputChange(e)}}
            >
            </input>
            <ul className="dropdown-menu">
                {renderDropdown()}
            </ul>
        </form>
    );
}
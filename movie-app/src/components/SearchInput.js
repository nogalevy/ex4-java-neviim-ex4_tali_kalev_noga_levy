import {useEffect, useReducer, useState} from "react";
import {InputTypes, Action} from "../consts/consts";
import listReducer from "../reducers/listReducer";

export default function SearchInput({inputType, genreDispatch, setUrl}) {
    const [submitValue, setSubmitValue] = useState('');
    const [s, setS] = useState('')
    const [historyState, historyDispatch] = useReducer(listReducer, {list : []});

    useEffect(() => {
        setS('');
    },[inputType]);

    useEffect(()=>{
        if (submitValue){
            handleSearch()
            addToHistory();
        }
    }, [submitValue])

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

    const handleSearch = () => {
        console.log("handling search...", submitValue)
        handleURL();
        genreDispatch({ type: Action.CLEAR});
        setS('')
        console.log("search history", historyState)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitValue(s)
    }
    const renderDropdown = () => {
        const reversedList = historyState.list.slice().reverse();

        return reversedList.map((item, index) => {
            return (
                <li key={index}>
                    <a className="dropdown-item" onClick={(e) => { setSubmitValue(item)} } href="#">
                        {item}
                    </a>
                </li>
            );
        });
    };


    const handleInputChange = (e) => {
        if(inputType === InputTypes.YEAR && containsNonNumericCharacter(e.target.value)) return
        setS(e.target.value)
    }

    function containsNonNumericCharacter(str) {
        return /\D/.test(str);
    }

    return (
        <form className="nav-item dropdown" role="search" onSubmit={handleSubmit}>
            <input type="search" className="text-dark dropdown-toggle form-control rounded-5"
                   data-bs-toggle="dropdown"
                   aria-expanded="false"
                   placeholder={`Search by ${inputType}`}
                   required
                   value={s} onChange={(e) => {handleInputChange(e)}}
            >
            </input>
            <ul className="dropdown-menu">
                {renderDropdown()}
            </ul>
        </form>
    );
}
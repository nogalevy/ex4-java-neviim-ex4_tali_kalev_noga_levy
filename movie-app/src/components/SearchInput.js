import {useEffect, useReducer, useState} from "react";
import {InputTypes, Action} from "../consts/consts";
import listReducer from "../reducers/listReducer";

export default function SearchInput({inputType, genreDispatch, setUrl}) {
    const [submitValue, setSubmitValue] = useState('');
    const [inputText, setInputText] = useState('')
    const [historyState, historyDispatch] = useReducer(listReducer, {list : []});
    // const [showDropdown, setShowDropdown] = useState(false)

    useEffect(() => {
        setInputText('');
    },[inputType]);

    useEffect(()=>{
        if (submitValue){
            handleSearch()
            addToHistory();
        }
    }, [submitValue])

    // useEffect(()=>{
    //     if(historyState.list.length > 0){
    //         setShowDropdown(true)
    //     }
    //     else{
    //         setShowDropdown(false)
    //     }
    // }, [historyState.list])

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
        setInputText('')
        console.log("search history", historyState)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitValue(inputText)
    }
    
    const renderDropdown = () => {
        const reversedList = historyState.list.slice().reverse();

        return (
                reversedList.map((item, index) => {
                return (
                    <li className="row" key={index}>
                        <a className="dropdown-item col" onClick={(e) => { setSubmitValue(item)} } href="#">
                            {item}
                        </a>
                        <a className="remove-button col" onClick={() => historyDispatch({type:Action.DELETE, payload: item})}>X</a>
                    </li>
                );
                })
        );
    };


    const handleInputChange = (e) => {
        if(inputType === InputTypes.YEAR && containsNonNumericCharacter(e.target.value)) return
        setInputText(e.target.value)
    }

    function containsNonNumericCharacter(str) {
        return /\D/.test(str);
    }
    //Tali: if i try to add showing dropdown as condition I get one of two issues: error - Cannot read properties of null (reading 'classList') or dropdown will not appear again after clearing history
    // {`dropdown-menu ${showDropdown ? "show" : ""}`}
    // {`nav-item ${historyState.list &&  historyState.list.length === 0 ? "" : "dropdown"}`}
    return (
        <form className="nav-item dropdown" role="search" onSubmit={handleSubmit}>
            <input
                type="search"
                className="text-dark dropdown-toggle form-control rounded-5"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                placeholder={`Search by ${inputType}`}
                required
                value={inputText}
                onChange={(e) => {
                    handleInputChange(e);
                }}
            />
                <ul className="dropdown-menu dropdown-menu-dark">
                    {renderDropdown()}
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            onClick={() => historyDispatch({ type: Action.CLEAR })}
                            href="#"
                        >
                            Clear Search History
                        </a>
                    </li>
                </ul>
        </form>
    );

}
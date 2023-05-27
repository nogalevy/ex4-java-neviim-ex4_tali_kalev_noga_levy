import {useEffect, useReducer, useState} from "react";
import {InputTypes, Action} from "../consts/consts";
import listReducer from "../reducers/listReducer";
import createMovieApiUrl from "./movieApiUrl";

/**
 *
 * @param inputType toggle value - by year or by title
 * @param genreDispatch dispatch to change genre list state
 * @param setUrl string
 * @returns {JSX.Element} returns element of search bar and search history
 * @constructor
 */
export default function SearchInput({inputType, genreDispatch, setUrl}) {
    const [submitValue, setSubmitValue] = useState('');
    const [inputText, setInputText] = useState('')
    const [historyState, historyDispatch] = useReducer(listReducer, {list : []});
    // const [showDropdown, setShowDropdown] = useState(false)

    /**
     * on change of toggle, text in search bar is cleared
     */
    useEffect(() => {
        setInputText('');
    },[inputType]);

    /**
     * if value submitted in search bar changed, handle search and add item to history
     */
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

    /**
     * build url to fetch based on input type and value
     */
    const handleURL = () => {
        let u;
        if (inputType === InputTypes.TITLE) {
            u = `/search/multi?query=${submitValue}&include_adult=false&language=en-US&page=1`
        } else if (inputType === InputTypes.YEAR) {
            u = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${submitValue}&sort_by=popularity.desc`
        }
        setUrl(createMovieApiUrl(u));
    }

    /**
     * add item searched to history if not already exists and not of type year input
     */
    const addToHistory = () => {
        if (!historyState.list.includes(submitValue) && inputType !== InputTypes.YEAR){
            historyDispatch({ type: Action.ADD, payload: submitValue });
        }
    }

    /**
     * on change of submit value, creates url to fetch, clears genre list if not already and clears text in search bar
     */
    const handleSearch = () => {
        handleURL();
        genreDispatch({ type: Action.CLEAR});
        setInputText('')
    }

    /**
     * on submit, setting submit value based on current text in search bar
     * @param e event
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitValue(inputText)
    }

    /**
     * renders search history items in dropdown
     * @returns {*}
     */
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


    /**
     * prevents input of digits while input type == year
     * @param e event
     */
    const handleInputChange = (e) => {
        if(inputType === InputTypes.YEAR && containsNonNumericCharacter(e.target.value)) return
        setInputText(e.target.value)
    }

    /**
     *
     * @param str string
     * @returns {boolean} true if string contains non numeric characters, otherwise false
     */
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
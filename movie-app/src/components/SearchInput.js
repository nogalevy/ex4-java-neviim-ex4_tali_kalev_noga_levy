import {useEffect, useReducer, useState} from "react";
import {InputTypes, Action} from "../consts/consts";
import listReducer from "../reducers/listReducer";
import createMovieApiUrl from "./movieApiUrl";
import SearchHistory from "./SearchHistory";
import {useLocation, useNavigate} from "react-router-dom";
import {getUrlDiscoverByYear, getUrlSearchByQuery} from "../consts/utills";

/**
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
    const location = useLocation()
    const navigate = useNavigate ();

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

    /**
     * build url to fetch based on input type and value
     */
    const handleURL = () => {
        let u;
        if (inputType === InputTypes.TITLE) {
            u = getUrlSearchByQuery(submitValue);
        } else if (inputType === InputTypes.YEAR) {
            u = getUrlDiscoverByYear(submitValue);
        }
        if (location.pathname !== '/') navigate('/');
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
     * @returns {boolean} true if string contains non-numeric characters, otherwise false
     */
    function containsNonNumericCharacter(str) {
        return /\D/.test(str);
    }

    return (
        <form className="nav-item dropdown" role="search" onSubmit={handleSubmit}>
            <input
                type="search"
                className="text-dark dropdown-toggle form-control rounded-5 py-2 px-3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                placeholder={`Search by ${inputType}`}
                required
                value={inputText}
                onChange={(e) => {
                    handleInputChange(e);
                }}
            />
            <SearchHistory historyState={historyState} historyDispatch={historyDispatch} setSubmitValue={setSubmitValue}/>
            </form>
    );

}
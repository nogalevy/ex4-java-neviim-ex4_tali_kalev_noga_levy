import { useState } from 'react';
import SearchInput from "./SearchInput";
import {InputTypes} from "../../consts/consts";
import GenreSearch from "./GenreSearch";

/**
 *
 * @param genreState state contains list of genres chosen from dropdown
 * @param genreDispatch dispatch to change state of genres chosen
 * @param setUrl string
 * @returns {JSX.Element} elements of genre dropdown, toggle button for search input types, search input and search history
 * @constructor
 */
export default function Search({genreState, genreDispatch, setUrl}) {
    const [inputType, setInputType] = useState(InputTypes.TITLE);

    /**
     * toggle through search type options - by title or by year
     */
    const handleToggle = () => {
        const newType = inputType === InputTypes.TITLE ? InputTypes.YEAR : InputTypes.TITLE;
        setInputType(newType)
    }

    return (
        <div className="d-flex ">
            <ul className="navbar-nav me-auto mb-lg-0 align-items-center">
                <li className="m-auto">
                    <GenreSearch genreState={genreState} genreDispatch={genreDispatch} setUrl={setUrl}/>
                </li>
                <li title="switch to title/year">
                    <div className="form-check form-switch toggle-button">
                        <input className="form-check-input" type="checkbox" onChange={handleToggle}
                               id="flexSwitchCheckDefault"/>
                    </div>
                </li>
                <li>
                    <SearchInput inputType={inputType} genreDispatch={genreDispatch} setUrl={setUrl}/>
                </li>
            </ul>
        </div>
    );
}
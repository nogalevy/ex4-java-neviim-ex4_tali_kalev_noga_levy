import { useState } from 'react';
import SearchInput from "./SearchInput";
import {InputTypes} from "../consts/consts";
import GenreSearch from "./GenreSearch";

export default function Search({state, dispatch, setUrl}) {
    const [inputType, setInputType] = useState(InputTypes.TITLE);

    const handleToggle = () => {
        const newType = inputType === InputTypes.TITLE ? InputTypes.YEAR : InputTypes.TITLE;
        setInputType(newType)
    }

    return (

        <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                    <GenreSearch state={state} dispatch={dispatch} setUrl={setUrl}/>
                </li>
                <li>
                    <div className="form-check form-switch toggle-button">
                        <input className="form-check-input" type="checkbox" onChange={handleToggle}
                               id="flexSwitchCheckDefault"/>
                    </div>
                </li>
                <li>
                    <SearchInput inputType={inputType} dispatch={dispatch} setUrl={setUrl}/>
                </li>
            </ul>
        </div>
    );
}
import {useState} from 'react';
import SearchInput from "./SearchInput";
import {InputTypes} from "../consts/consts";


export default function Search() {
    const [inputType, setInputType] = useState(InputTypes.TITLE);
    // const [submitInput, setSubmitInput] = useState('');


    const handleToggle = () =>{
        const newType = inputType === InputTypes.TITLE ? InputTypes.YEAR : InputTypes.TITLE;
        // setSubmitInput('')
        setInputType(newType)
    }

     return (
         <div className="d-flex">
             <div className="form-check form-switch">
                 <input className="form-check-input" type="checkbox" onChange={handleToggle} id="flexSwitchCheckDefault"/>
             </div>
             <SearchInput inputType={inputType} /*submitInput={submitInput} setSubmitInput={setSubmitInput()}*//>
         </div>
     );
}
import {useState} from 'react';
import SearchInput from "./SearchInput";
import {InputTypes} from "./consts";


export default function Search() {
    const [inputType, setInputType] = useState(InputTypes.TITLE);

    const handleToggle = () =>{
        const newType = inputType === InputTypes.TITLE ? InputTypes.YEAR : InputTypes.TITLE;
        setInputType(newType)
    }

     return (
         <div className="d-flex">
             <div className="form-check form-switch">
                 <input className="form-check-input" type="checkbox" onChange={handleToggle} id="flexSwitchCheckDefault"/>
             </div>
            <SearchInput inputType={inputType}/>
         </div>
     );
}
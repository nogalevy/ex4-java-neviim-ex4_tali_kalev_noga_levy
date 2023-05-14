import {useState} from 'react';


export default function Search({handleSearchSubmit}) {
    const [submitInput, setSubmitInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearchSubmit(submitInput)
    }

     return (
         <form className="d-flex" role="search" onSubmit={handleSubmit}>
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                    required value={submitInput} onChange={(e) => setSubmitInput(e.target.value)}/>
             <button className="btn btn-outline-success" type="submit">Search</button>
         </form>
     );
}
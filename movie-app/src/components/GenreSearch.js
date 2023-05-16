import useFetch from "./useFetch";
import {useReducer} from "react";

//todo: movvvvvvvvvveeeee
function genreReducer(state, action){
    switch(action.type){
        case 'add' :{
            return { genres: [...state.genres, action.payload] };
        }
        // case 'remove' :{
        //     return state.filter((elem) => elem.id !== action.payload.id);
        // }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export default function GenreSearch(){
    //AND between genres, %2C, OR between genres %7C
    const U = '/genre/movie/list?language=en'
    const {data } = useFetch(U);
    console.log("GENRES",data);
    const [state, dispatch] = useReducer(genreReducer,{genres:[]})

    const getGenres = ()=>{
        const genres=data['genres']
        console.log("hheeeeee", genres)
        return genres.length > 0 && genres.map((element) => {
            return (
                <li key={element.id}>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" onChange={()=>{dispatch({type: 'add' , payload: element.id});}} type="checkbox" value="" id={element.id}/>
                            <label className="form-check-label" htmlFor={element.id}>{element.name}</label>
                        </div>
                    </a>
                </li>
            )
        })
    }

    return(
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="\" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
                Choose Genre
            </a>
            <ul className="dropdown-menu">
                {data && getGenres()}
            </ul>
        </li>
    );
}
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
    //fetch genres
    //AND between genres, %2C, OR between genres %7C
    //show drop down list
    const U = '/genre/movie/list?language=en'
    const { error, isPending, data } = useFetch(U);
    console.log("GENRES",error, isPending, data);
    const [state, dispatch] = useReducer(genreReducer,{genres:[]})
    console.log("okkkk",state)

    const getGenres = ()=>{
        const genres=data['genres']
        console.log("hheeeeee", genres)
        return genres.length > 0 && genres.map((element) => {
            return (
                // <li><a className="dropdown-item" id={element.id} href="\">{element.name}</a></li>
                <li>
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
                Dropdown
            </a>
            <ul className="dropdown-menu">
                {data && getGenres()}
                {/*<li><a className="dropdown-item" href="\">Movies</a></li>*/}
                {/*<li><a className="dropdown-item" href="\">TV</a></li>*/}
                {/*<li>*/}
                {/*    <hr className="dropdown-divider"/>*/}
                {/*</li>*/}
                {/*<li><a className="dropdown-item" href="\">Something else here</a></li>*/}
            </ul>
        </li>
    );
}
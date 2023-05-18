import useFetch from "./useFetch";
import {useReducer, useEffect, useState} from "react";
import {useMoviesContext} from "../contexts/MoviesContext";

//todo: movvvvvvvvvveeeee
function genreReducer(state, action) {
    switch (action.type) {
        case 'add': {
            return { genres: [...state.genres, action.payload] };
        }
        case 'remove': {
            return { genres: state.genres.filter((id) => id !== action.payload) };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}
const GENRE_LIST_URL = '/genre/movie/list?language=en'
export default function GenreSearch(){
    //AND between genres, %2C, OR between genres %7C
    const { data:genreData } = useFetch(GENRE_LIST_URL);
    const [state, dispatch] = useReducer(genreReducer, { genres: [] });
    const {setMoviesData} = useMoviesContext()
    const [gu, setGu] = useState(null)
    const { error, isPending, data } = useFetch(gu);

    useEffect(()=>{
        if (state.genres !== []){
            setMoviesData({error, isPending, data})
        }
    },[error, isPending, data])

    useEffect(() => {
        console.log('Selected genres:', state.genres);
        ///discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16%2C18'
        if (state.genres !== []){
            let genres = state.genres.join('%2C')
            let u = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genres}`
            setGu(u)
        }
    }, [state.genres]);

    const handleChange = (event) => {
        const genreId = event.currentTarget.id;
        if (event.target.checked) {
            console.log('Adding genre:', genreId);
            dispatch({ type: 'add', payload: genreId });
        } else {
            console.log('Removing genre:', genreId);
            dispatch({ type: 'remove', payload: genreId });
        }
    };

    const getGenres = ()=>{
        if (!genreData || !genreData.genres) {
            return null;
        }
        return genreData.genres.map((genre) => {
            return (
                <li key={genre.id}>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" onChange={handleChange} type="checkbox" value="" id={genre.id}/>
                            <label className="form-check-label" htmlFor={genre.id}>{genre.name}</label>
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
                {getGenres()}
            </ul>
        </li>
    );
}

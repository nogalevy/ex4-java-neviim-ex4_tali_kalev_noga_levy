import useFetch from "./useFetch";
import {useEffect, useState} from "react";
import {useMoviesContext} from "../contexts/MoviesContext";
import {useNavigate} from "react-router-dom";

const GENRE_LIST_URL = '/genre/movie/list?language=en'
export default function GenreSearch({state, dispatch}){
    //AND between genres, %2C, OR between genres %7C
    const { data:genreData } = useFetch(GENRE_LIST_URL);
    const {setMoviesData} = useMoviesContext()
    const [gu, setGu] = useState(null)
    const { error, isPending, data } = useFetch(gu);
    const navigate = useNavigate()

    useEffect(()=>{
        if (state.genres.length > 0){
            setMoviesData({error, isPending, data})
        }
    },[error, isPending, data])

    useEffect(() => {
        console.log('Selected genres:', state.genres);
        ///discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16%2C18'
        if (state.genres.length > 0){
            //tali: this makes it so that if there is one left checked and you uncheck it it does nothing
            let genres = state.genres.join('%2C')
            let u = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genres}`
            navigate('/')
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
                            <input className="form-check-input" onChange={handleChange} type="checkbox"
                                   checked={state.genres.includes(genre.id.toString())} value="" id={genre.id}/>
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

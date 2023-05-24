import useFetch from "./useFetch";
import {useEffect} from "react";
import {GENRE_LIST, Action} from "../consts/consts";

export default function GenreSearch({genreState, genreDispatch, setUrl}){
    //AND between genres, %2C, OR between genres %7C
    const { data:genreData } = useFetch(GENRE_LIST);

    useEffect(() => {
        console.log('Selected genres:', genreState.list);
        if (genreState.list.length > 0){
            //tali: this makes it so that if there is one left checked and you uncheck it it does nothing
            let genres = genreState.list.join(',')
            let u = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genres}`
            setUrl(u)
        }
    }, [genreState.list]);

    const handleChange = (event) => {
        const genreId = event.currentTarget.id;
        if (event.target.checked) {
            console.log('Adding genre:', genreId);
            genreDispatch({ type: Action.ADD, payload: genreId });
        } else {
            console.log('Removing genre:', genreId);
            genreDispatch({ type: Action.DELETE, payload: genreId });
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
                                   checked={genreState.list.includes(genre.id.toString())} value="" id={genre.id}/>
                            <label className="form-check-label" htmlFor={genre.id}>{genre.name}</label>
                        </div>
                    </a>
                </li>
            )
        })
    }

    return(
        <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="\" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
                Choose Genre
            </a>
            <ul className="dropdown-menu">
                {getGenres()}
            </ul>
        </div>
    );
}

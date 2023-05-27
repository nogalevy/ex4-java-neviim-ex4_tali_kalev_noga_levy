import useFetch from "./useFetch";
import {useEffect} from "react";
import {GENRE_LIST, Action, TRENDING_PAGE} from "../consts/consts";

export default function GenreSearch({genreState, genreDispatch, setUrl}){
    //AND between genres, %2C, OR between genres %7C
    const { data:genreData } = useFetch(GENRE_LIST);

    useEffect(() => {
        console.log("in use effect")
        if (genreState.list.length > 0){
            let genres = genreState.list.join(',')
            let u = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genres}`
            setUrl(u)
        }
    }, [genreState.list]);

    const handleChange = (event) => {
        const genreId = event.currentTarget.id;
        if (event.target.checked) {
            genreDispatch({ type: Action.ADD, payload: genreId });
        } else {
            genreDispatch({ type: Action.DELETE, payload: genreId });
            //when one genre left is unchecked, return to trending page - checks === 1 since dispatch is async
            if(genreState.list.length === 1){
                setUrl(TRENDING_PAGE)
            }
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

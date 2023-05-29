import useFetch from "../../hooks/useFetch";
import {useEffect} from "react";
import {GENRE_LIST, Action, TRENDING_PAGE} from "../../consts/consts";
import {createMovieApiUrl, getUrlDiscoverByGenres} from "../../utils/movieApiUrl"
import {useLocation, useNavigate} from 'react-router-dom';

export default function GenreSearch({genreState, genreDispatch, setUrl}){
    const { data:genreData } = useFetch(createMovieApiUrl(GENRE_LIST)); //retrieves types of genres for dropdown
    const location = useLocation()
    const navigate = useNavigate ();
    
    /**
     * on change of list of genres chosen, builds url to fetch genres
     */
    useEffect(() => {
        if (genreState.list.length > 0){
            let genres = genreState.list.join(',') //logical AND
            let u = getUrlDiscoverByGenres(genres);
            setUrl(createMovieApiUrl(u))
            if (location.pathname !== '/') navigate('/')
        }
    }, [genreState.list]);

    /**
     *
     * @param event of checked genres
     * if genre is checked in list -> adds to chosen genre list, if unchecked, removes
     */
    const handleChange = (event) => {
        const genreId = event.currentTarget.id;
        if (event.target.checked) {
            genreDispatch({ type: Action.ADD, payload: genreId });
        } else {
            genreDispatch({ type: Action.DELETE, payload: genreId });
            //when one genre left is unchecked, return to trending page - checks === 1 since dispatch is async
            if(genreState.list.length === 1){
                setUrl(createMovieApiUrl(TRENDING_PAGE))
            }
        }
    };

    /**
     *
     * @returns {*|null}
     * builds list of genres to choose from in dropdown list form
     */
    const getGenres = ()=>{
        if (!genreData || !genreData.genres) {
            return null;
        }
        return genreData.genres.map((genre) => {
            return (
                <li key={genre.id}>
                    <div className="dropdown-item">
                        <div className="form-check">
                            <input className="form-check-input" onChange={handleChange} type="checkbox"
                                   checked={genreState.list.includes(genre.id.toString())} value="" id={genre.id}/>
                            <label className="form-check-label" htmlFor={genre.id}>{genre.name}</label>
                        </div>
                    </div>
                </li>
            )
        })
    }

    return(
        <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="\" role="button" data-bs-toggle="dropdown"
               // aria-expanded="false"
            >
                Choose Genre
            </a>
            <ul className="dropdown-menu">
                {getGenres()}
            </ul>
        </div>
    );
}

import Spinner from './Spinner';
import MovieCard from './MovieElement/MovieCard';
import { useMoviesContext } from "../contexts/MoviesContext";

/**
 *
 * @returns {JSX.Element} that displays all fetched movie content
 * @constructor
 */
export default function Home(){
    const { moviesData } = useMoviesContext();

    /**
     * creates grid of movies with data, displays message if no results from fetch
     * @returns {false|*|JSX.Element}
     */
    const createGrid = () => {
        console.log("here", moviesData.data) //TODO: REMOVE
        if (!moviesData.data || !moviesData.data.results || moviesData.data.results.length === 0) {
            return (<div>Sorry, no search results.</div>)
        }
        return moviesData.data.results.length > 0 && moviesData.data.results.map((element, index) =>
                <MovieCard key={element.id} element={element} index={index}/>
        )
    }

    return (
        <div className="mt-4 container">
            <div className="g-4 row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1">
                {moviesData.error && <div>{moviesData.error}</div>}
                {moviesData.isPending && <Spinner />}
                {!moviesData.isPending && createGrid()}
            </div>
        </div>
    );
}
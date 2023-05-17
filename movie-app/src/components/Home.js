import Spinner from './Spinner';
import MovieCard from './MovieCard';
import { useMoviesContext } from "../contexts/MoviesContext";
import { useCart } from "../contexts/CartContext";
import axios from "axios";
import { useState } from 'react';

const Home = () => {
    const { moviesData } = useMoviesContext();
    // const [isCardLoad, setIsCardLoad] = useState(false)

    const createGrid = () => {
        console.log("here", moviesData.data)
        return moviesData.data.length > 0 && moviesData.data.map((element, index) => {
            // let img = element.poster_path || element.backdrop_path;
            return (
                //NOGA: move to new component
                // <div className="col" key={element.id}>

                //     <div className={`card ${!isCardLoad ? 'd-none' : ''}`}>
                //         <div className="position-relative ">
                //             <img onLoad={() => { setIsCardLoad(true); console.log("yes?") }} src={`https://image.tmdb.org/t/p/w500${img}`}
                //                 className="card-img-top" alt={element.name} />
                //             <AddToCart itemData={moviesData.data[index]} index={index} />
                //         </div>

                //         <div className="card-body">
                //             <p className="card-title text-dark">{element.name || element.title || "unknown name"} </p>
                //         </div>
                //     </div>

                //     <div class={`card ${isCardLoad ? 'd-none' : ''}`} aria-hidden="true">
                //         {/* <img src="..." class="card-img-top" alt="..."/> */}
                //         <img src='/placeholder.jpg' className='card-img-top'></img>
                //         <div class="card-body">
                //             <h5 aria-hidden="true" class="card-title placeholder-glow">
                //                 <span class="placeholder bg-secondary col-6"></span>
                //             </h5>
                //         </div>
                //     </div>

                // </div>

                <MovieCard element={element} index={index}/>
            )
        })
    }

    return (
        <div className="mt-4 container">
            <div className="g-4 row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1">
                {moviesData.error && <div>{moviesData.error}</div>}
                {moviesData.isPending && <Spinner />}
                {moviesData.data && createGrid()}
            </div>
        </div>
    );
}

export default Home; //Tali: make sure uniform

// NOGA: example for movie object data:
// [
//     {
//         "adult": false,
//         "backdrop_path": "/ogMd4e3A0uSNwZADzgC23zCByoi.jpg",
//         "id": 65334,
//         "name": "Miraculous: Tales of Ladybug & Cat Noir",
//         "original_language": "fr",
//         "original_name": "Miraculous, les aventures de Ladybug et Chat Noir",
//         "overview": "Normal high school kids by day, protectors of Paris by night! Miraculous follows the heroic adventures of Marinette and Adrien as they transform into Ladybug and Cat Noir and set out to capture akumas, creatures responsible for turning the people of Paris into villains. But neither hero knows the other’s true identity – or that they’re classmates!",
//         "poster_path": "/psDcRgUX38cIeGeADwLRPyO7SYC.jpg",
//         "media_type": "tv",
//         "genre_ids": [
//             10759,
//             16,
//             10762
//         ],
//         "popularity": 303.756,
//         "first_air_date": "2015-10-19",
//         "vote_average": 8.032,
//         "vote_count": 4039,
//         "origin_country": [
//             "FR"
//         ]
//     }
// ]
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Spinner from './Spinner';

const TRENDING_PAGE = '/trending/all/week?&language=en-US&';
const Home = ({ searchValue }) => {
    // const query = encodeURIComponent(searchValue);
    const [url, setUrl] = useState(TRENDING_PAGE)
    const { error, isPending, data: list } = useFetch(url)
    // g-4 row row-cols-lg-4 row-cols-md-3 row-cols-1
    console.log(searchValue);

    useEffect(() => {
        let u;
        u = searchValue ? `/search/multi?query=${searchValue}&include_adult=false&language=en-US&page=1` : TRENDING_PAGE;
        setUrl(u);
    }, [searchValue])

    const createGrid = () => {
        console.log("here", list)
        return list.length > 0 && list.map(element => {
            let img = element.poster_path || element.backdrop_path;
            return (
                <div className="col" key={element.id}>
                    <div className="card">
                        <img src={`https://image.tmdb.org/t/p/w500${img}`}
                            className="card-img-top" alt={element.name} />
                        <div className="card-body">
                            <p className="card-title text-dark">{element.name || "unknown name"} </p>
                            {/* <p className="card-text text-dark">{element.name}</p> */}
                        </div>
                        <div class="card-footer">
                            <button  className="btn  card-title text-dark"> +  </button>
                        </div>
                    </div>
                </div>
            )
        })
    }
    //Tali: switch loading print to something nicerrrrrr
    return (
        <div className="mt-4 container">
            <div className="g-4 row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1">
                {error && <div>{error}</div>}
                {isPending && <Spinner/>}
                {list && createGrid()}
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
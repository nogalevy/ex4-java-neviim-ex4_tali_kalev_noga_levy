import {useEffect, useState} from "react";
import axios from "axios";
import useFetch from "./useFetch";

//NOGA: move api key and use the useFetch hook
// const API_KEY = "3285bfe9a9135db7c2dc2f19ede60c9a";
// const DOMAIN = "https://api.themoviedb.org/3";
const Home = ({searchValue}) => {
    const { error, isPending, data: list } = useFetch('/trending/all/week?&language=en-US&')
    // g-4 row row-cols-lg-4 row-cols-md-3 row-cols-1
    console.log(searchValue);

    // useEffect(()=>{
    //     const query = 'cat';
    //     let url;
    //     url = searchValue.isEmpty() ? '/trending/all/week?&language=en-US&' : `/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
    //     useFetch(url);
    // },[searchValue])

    const createGrid = () =>{
        console.log("here", list)
        return list.length > 0 && list.map(element => {
            let img = element.poster_path || element.backdrop_path;
            return (
                <div className="col">
                    <div className="card">
                        <img src={`https://image.tmdb.org/t/p/w500${img}`}
                             className="card-img-top" alt={element.name}/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text text-dark">{element.name}</p>
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
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { list && createGrid() }
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
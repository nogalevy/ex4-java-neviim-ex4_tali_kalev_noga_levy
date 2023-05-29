import {DEFAULT_IMG_SRC} from "../consts/consts";

const API_KEY = "3285bfe9a9135db7c2dc2f19ede60c9a";
const DOMAIN = "https://api.themoviedb.org/3";

/**
 *
 * @param url partial url for movies API
 * @returns {string} full url including domain and api key for fetch
 */
export function createMovieApiUrl(url){
    return DOMAIN + url + `&api_key=` + API_KEY
}

/**
 * @param element from api
 * @returns {[string,(*|string)]}
 * returns the src and title
 */
export const getImageTitleAndSrc = (element)=>{
    let src;
    const img = element.poster_path || element.backdrop_path;
    if(!img) src = DEFAULT_IMG_SRC;
    else src = `https://image.tmdb.org/t/p/w500${img}`;
    const title = element.name || element.title || "unknown name";

    return [src, title];
}

/**
 * gets query and return the right path to api
 * @param query string
 * @returns url
 */
export const getUrlSearchByQuery = (query="") => {
    return `/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
}

/**
 * gets year and returns the right path to api
 * @param year
 * @returns url
 */
export const getUrlDiscoverByYear = (year) => {
    return `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${year}&sort_by=popularity.desc`;
}

/**
 * gets genres and return the right path to api
 * @param genres
 * @returns url
 */
export const getUrlDiscoverByGenres = (genres) => {
    return `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genres}`}

const API_KEY = "3285bfe9a9135db7c2dc2f19ede60c9a";
const DOMAIN = "https://api.themoviedb.org/3";

/**
 *
 * @param url partial url for movies API
 * @returns {string} full url including domain and api key for fetch
 */
export default function createMovieApiUrl(url){
    return DOMAIN + url + `&api_key=` + API_KEY
}
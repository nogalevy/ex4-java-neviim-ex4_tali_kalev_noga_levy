
const API_KEY = "3285bfe9a9135db7c2dc2f19ede60c9a";
const DOMAIN = "https://api.themoviedb.org/3";

export default function createMovieApiUrl(url){
    return DOMAIN + url + `&api_key=` + API_KEY
}
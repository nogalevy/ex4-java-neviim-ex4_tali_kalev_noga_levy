import {DEFAULT_IMG_SRC} from "./consts";

export const getImageTitleAndSrc = (element)=>{
    let src;
    const img = element.poster_path || element.backdrop_path;
    if(!img) src = DEFAULT_IMG_SRC;
    else src = `https://image.tmdb.org/t/p/w500${img}`;
    const title = element.name || element.title || "unknown name";

    return [src, title];
}

export const getUrlSearchByQuery = (query="") => {
    return `/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
}

export const getUrlDiscoverByYear = (year) => {
    return `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${year}&sort_by=popularity.desc`;
}
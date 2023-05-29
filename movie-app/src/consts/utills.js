import {DEFAULT_IMG_SRC} from "./consts";

export const getImageTitleAndSrc = (element)=>{
    let src;
    const img = element.poster_path || element.backdrop_path;
    if(!img) src = DEFAULT_IMG_SRC;
    else src = `https://image.tmdb.org/t/p/w500${img}`;
    const title = element.name || element.title || "unknown name";

    return [src, title];
}
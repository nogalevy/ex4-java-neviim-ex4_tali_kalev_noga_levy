import AddToCart from "./AddToCart";
import {useEffect, useState} from 'react';

const MovieCard = ({ element , index}) => {
    const [isCardLoad, setIsCardLoad] = useState(false)
    const [imgSrc, setImgSrc] = useState('');
    const [imgName, setImgName] = useState('');

    //NOGA: ??
    useEffect(()=>{
        const img = element.poster_path || element.backdrop_path;
        const title = element.name || element.title || "unknown name";
        setImgName(title);
        setImgSrc(`https://image.tmdb.org/t/p/w500${img}`);
    },[])

    return (

        <div className="col" key={element.id}>
            {/*card:*/}
            <div className={`card ${!isCardLoad ? 'd-none' : ''}`}>
                <div className="position-relative ">
                    <img onLoad={() => { setIsCardLoad(true);}} src={imgSrc}
                        className="card-img-top" alt={element.name} />
                    <AddToCart itemData={element} index={index} />
                </div>

                <div className="card-body">
                    <p className="card-title text-dark">{imgName} </p>
                </div>
            </div>

            {/*placeholder:*/}
            <div className={`card ${isCardLoad ? 'd-none' : ''}`} aria-hidden="true">
                <img src='/placeholder.jpg' className='card-img-top' alt="placeholder"/>
                <div className="card-body">
                    <h5 aria-hidden="true" className="card-title placeholder-glow">
                        <span className="placeholder bg-secondary col-6"></span>
                    </h5>
                </div>
            </div>

        </div>
    )
}

export default MovieCard;
import AddToCart from "./AddToCart";
import { useState } from 'react';

const MovieCard = ({ element , index}) => {
    const [isCardLoad, setIsCardLoad] = useState(false)

    const getImage = () => {
        const img = element.poster_path || element.backdrop_path;
        return `https://image.tmdb.org/t/p/w500${img}`
    }

    return (
        <div className="col" key={element.id}>
            <div className={`card ${!isCardLoad ? 'd-none' : ''}`}>
                <div className="position-relative ">
                    <img onLoad={() => { setIsCardLoad(true);}} src={getImage()}
                        className="card-img-top" alt={element.name} />
                    <AddToCart itemData={element} index={index} />
                </div>

                <div className="card-body">
                    <p className="card-title text-dark">{element.name || element.title || "unknown name"} </p>
                </div>
            </div>

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
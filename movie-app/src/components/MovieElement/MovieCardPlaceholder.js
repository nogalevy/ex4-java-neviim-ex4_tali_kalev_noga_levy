import React from "react";

/**
 * when image card is loaded display placeholder
 * @param isCardLoad
 * @returns {JSX.Element}
 * @constructor
 */
const MovieCardPlaceholder = ({isCardLoad}) => {
    return (
        <div className={`movie-card-con card ${isCardLoad ? 'd-none' : ''}`} aria-hidden="true">
            <img src='/placeholder.jpg' className='card-img-top' alt="placeholder"/>
            <div className="card-body">
                <h5 aria-hidden="true" className="card-title placeholder-glow">
                    <span className="placeholder bg-secondary col-6"></span>
                </h5>
            </div>
        </div>
    );
};

export default MovieCardPlaceholder;

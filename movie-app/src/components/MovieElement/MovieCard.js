import {useState} from 'react';
import {useCart} from "../../contexts/CartContext";
import {ArrowsAngleExpand} from "react-bootstrap-icons";

import useFirstMount from "../../hooks/useFirstMount";
import AddToCart from "../AddToCart";
import MovieCardPlaceholder from "./MovieCardPlaceholder";
import MovieModal from "./MovieModal";

import '../../stylesheets/movieCard.css'
import {getImageTitleAndSrc} from "../../utils/movieApiUrl";


const MovieCard = ({ element , index}) => {
    const [isCardLoad, setIsCardLoad] = useState(false)
    const [imgSrc, setImgSrc] = useState('');
    const [title, setTitle] = useState('');
    const [inCart, setInCart] = useState(false);
    const {state} = useCart();

    /**
     * first mount set image src and title and checks if in cart
     */
    useFirstMount(function (){
        const [src, title] = getImageTitleAndSrc(element)
        setImgSrc(src);
        setTitle(title);

        isInCart();
    })

    /**
     * checks if current movie is in cart
     */
    const isInCart = () => {
        if(state.cart && state.cart.hasOwnProperty(element.id)){
            setInCart(true);
        }
    }

    return (
        <div className="col" key={element.id}>
            {/*card:*/}
            <div className={`movie-card-con card position-relative  ${!isCardLoad ? 'd-none' : ''}`}>
                <div className="card-con">
                    <div className="position-relative ">
                        <img onLoad={() => { setIsCardLoad(true);}} src={imgSrc}
                            className="card-img-top" alt={element.name} />
                    </div>
                    <div className="card-body">
                        <p className="card-title text-dark">{title} </p>
                    </div>
                </div>
                <div className="add">

                <button type="button" className="btn text-light position-absolute end-0 m-2" data-bs-toggle="modal" data-bs-target={`#movie${element.id}`}>
                    <ArrowsAngleExpand/>
                </button>
                <AddToCart inCart={inCart} setInCart={setInCart} itemData={element} index={index} />
                </div>
            </div>

            <MovieModal id={element.id} img={imgSrc} title={title} description={element.overview} />
            <MovieCardPlaceholder isCardLoad={isCardLoad}/>
        </div>
    )
}

export default MovieCard;
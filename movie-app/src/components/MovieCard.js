import AddToCart from "./AddToCart";
import {useEffect, useState} from 'react';
import {useCart} from "../contexts/CartContext";
import '../stylesheets/colors.css'
import {PlusSquareFill} from "react-bootstrap-icons";

const MovieCard = ({ element , index}) => {
    const [isCardLoad, setIsCardLoad] = useState(false)
    const [imgSrc, setImgSrc] = useState(''); //NOGA:
    const [imgName, setImgName] = useState(''); //NOGA:
    const [inCart, setInCart] = useState(false);
    const {state, dispatch} = useCart();

    //NOGA: ??
    useEffect(()=>{
        const img = element.poster_path || element.backdrop_path;
        if(img)  setImgSrc(`https://image.tmdb.org/t/p/w500${img}`);
        else setImgSrc('/noimage1.png'); //TODO: add to const
        const title = element.name || element.title || "unknown name";
        setImgName(title);

        isInCart();
    },[])

    const isInCart = () => {
        if(state.cart && state.cart.hasOwnProperty(element.id)){
            setInCart(true);
        }
    }

    return (

        <div className="col" key={element.id}>
            {/*card:*/}
            <div className={`movie-card-con card position-relative ${!isCardLoad ? 'd-none' : ''}`}>
                <div className="card-con">

                    <div className="position-relative ">
                        <img onLoad={() => { setIsCardLoad(true);}} src={imgSrc}
                            className="card-img-top" alt={element.name} />
                        {/* NOGA: old :*/}
                        {/*<AddToCart inCart={inCart} setInCart={setInCart} itemData={element} index={index} />*/}
                    </div>

                    <div className="card-body">
                        <p className="card-title text-dark">{imgName} </p>
                    </div>
                </div>
                {/*NOGA: new :*/}
                <AddToCart inCart={inCart} setInCart={setInCart} itemData={element} index={index} />
            </div>

            {/*placeholder:*/}
            <div className={`movie-card-con card ${isCardLoad ? 'd-none' : ''}`} aria-hidden="true">
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
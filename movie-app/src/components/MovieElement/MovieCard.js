import AddToCart from "../AddToCart";
import {useState} from 'react';
import {useCart} from "../../contexts/CartContext";
import '../../stylesheets/movieCard.css'
import {ArrowsAngleExpand} from "react-bootstrap-icons"
import MovieModal from "./MovieModal";
import MovieCardPlaceholder from "./MovieCardPlaceholder";
import useFirstMount from "../useFirstMount";


const MovieCard = ({ element , index}) => {
    const [isCardLoad, setIsCardLoad] = useState(false)
    const [imgSrc, setImgSrc] = useState(''); //NOGA:
    const [title, setTitle] = useState(''); //NOGA:
    const [inCart, setInCart] = useState(false);
    const {state} = useCart();

    useFirstMount(function (){
        const img = element.poster_path || element.backdrop_path;
        if(img)  setImgSrc(`https://image.tmdb.org/t/p/w500${img}`);
        else setImgSrc('/noimage1.png'); //TODO: add to const
        const title = element.name || element.title || "unknown name";
        setTitle(title);

        isInCart();
    })
    //NOGA: ??
    // useEffect(()=>{
    //     const img = element.poster_path || element.backdrop_path;
    //     if(img)  setImgSrc(`https://image.tmdb.org/t/p/w500${img}`);
    //     else setImgSrc('/noimage1.png'); //TODO: add to const
    //     const title = element.name || element.title || "unknown name";
    //     setTitle(title);
    //
    //     isInCart();
    // },[])

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
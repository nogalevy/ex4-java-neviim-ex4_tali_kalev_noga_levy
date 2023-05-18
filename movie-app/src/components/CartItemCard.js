import {Trash3Fill} from "react-bootstrap-icons";
import {useEffect, useState} from "react";
import DeleteCartItem from "./DeleteCartItem";

export default function CartItemCard({element}){
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
        <div key={element.id} className="card mb-3 text-bg-light" style={{maxWidth: "540px" }}>
            <div className="row g-0 ">
                <div className="col-md-4">
                    <img src={imgSrc} className="img-fluid rounded-start" alt={element.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{imgName}</h5>
                        <p className="card-text">{element.price}$</p>
                    </div>
                    <DeleteCartItem id={element.id}/>
                </div>
            </div>
        </div >
    )

}

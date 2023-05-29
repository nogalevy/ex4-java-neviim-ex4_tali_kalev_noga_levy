import {useState} from "react";
import {getImageTitleAndSrc} from "../utils/movieApiUrl";
import useFirstMount from "../hooks/useFirstMount";
import DeleteCartItem from "./DeleteCartItem";

export default function CartItemCard({element}){
    const [imgSrc, setImgSrc] = useState('');
    const [imgName, setImgName] = useState('');

    /**
     * on first mount set the image src and title
     */
    useFirstMount(function (){
        const [src, title] = getImageTitleAndSrc(element)
        setImgSrc(src);
        setImgName(title);
    })

    return (
        <div key={element.id} className="card mb-3 text-bg-light" style={{maxWidth: "540px" }}>
            <div className="row g-0 ">
                <div className="col-md-4 col-sm-2 col-3">
                    <img src={imgSrc} className="img-fluid rounded-start" alt={element.name} />
                </div>
                <div className="col-md-8 col-sm-10 col-9 d-flex align-content-between flex-column">
                    <div className="card-body">
                        <h5 className="card-title">{imgName}</h5>
                    </div>
                    <div className="card-footer bg-transparent align-self-end w-100">
                        <div className="d-flex justify-content-between">
                       <p className="card-text my-auto">{element.price}$</p>
                       <div>
                            <DeleteCartItem id={element.id}/>
                       </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

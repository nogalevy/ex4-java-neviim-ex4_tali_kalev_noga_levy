import { useState } from "react";
import {Link} from 'react-router-dom';

const exampleList = [
    {
        "price": 3.99, //NOGA: add
        "backdrop_path": "/ogMd4e3A0uSNwZADzgC23zCByoi.jpg",
        "id": 65334,
        "name": "Miraculous: Tales of Ladybug & Cat Noir",
        "original_language": "fr",
        "overview": "Normal high school kids by day, protectors of Paris by night! Miraculous follows the heroic adventures of Marinette and Adrien as they transform into Ladybug and Cat Noir and set out to capture akumas, creatures responsible for turning the people of Paris into villains. But neither hero knows the other’s true identity – or that they’re classmates!",
        "poster_path": "/psDcRgUX38cIeGeADwLRPyO7SYC.jpg",
        "media_type": "tv",
    },
    {
        "price": 3.99, //NOGA: add
        "backdrop_path": "/ogMd4e3A0uSNwZADzgC23zCByoi.jpg",
        "id": 65334,
        "name": "Miraculous: Tales of Ladybug & Cat Noir",
        "original_language": "fr",
        "overview": "Normal high school kids by day, protectors of Paris by night! Miraculous follows the heroic adventures of Marinette and Adrien as they transform into Ladybug and Cat Noir and set out to capture akumas, creatures responsible for turning the people of Paris into villains. But neither hero knows the other’s true identity – or that they’re classmates!",
        "poster_path": "/psDcRgUX38cIeGeADwLRPyO7SYC.jpg",
        "media_type": "tv",
    }
]

export default function Cart(props) {
    const [list, setList] = useState(exampleList)

    const createList = () => {
        return list && list.map((element) => {
            let img = element.poster_path || element.backdrop_path;
            return (
                //NOGA: move to new component
                <div class="card mb-3 text-bg-light" style={{
                    maxWidth: "540px"
                }}>
                    <div class="row g-0 ">
                        <div class="col-md-4">
                            <img src={`https://image.tmdb.org/t/p/w500${img}`} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{element.name}</h5>
                                <p class="card-text">{element.price}$</p>
                            </div>
                            <div class="card-footer bg-transparent border-success">
                                <button>delete</button>
                            </div>
                        </div>
                    </div>
                </div >
            )
        })
    }

    return (
        <>
            <h3>cart</h3>
            <div className="m-auto">
                {createList()}
            </div>
            <Link className="btn btn-primary mb-3" to="/checkout">checkout</Link>
        </>

    );
}


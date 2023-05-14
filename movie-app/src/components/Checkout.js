import { useState } from "react";
import { Link } from 'react-router-dom';

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

    return (
        <div className="container">
            <h3>checkout</h3>
            <form className="m-auto form-floating text-dark">
                <div class="row">
                    <div class="form-floating mb-3 col">
                        <input type="text" class="form-control" id="floatingFirst" placeholder="first name" />
                        <label for="floatingFirst">first name</label>
                    </div>
                    <div class="form-floating col">
                        <input type="text" class="form-control" id="floatingLast" placeholder="last name" />
                        <label for="floatingLast">last name</label>
                    </div>
                </div>
                <div class="form-floating ">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="name@gmail.com" />
                    <label for="floatingEmail">email</label>
                </div>
                <div class="m-auto">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    );
}


import React from 'react'
import { Link } from "react-router-dom";
import './style.css'

const Card = ({id, name, image}) => {
    return(
        <Link to={`/beach/${id}/`}>
            <div className="card">
                <div className="card-name">
                    <h1>{name}</h1>
                </div>
                <div className="card-body">
                    <img src={image} alt={name}/>
                </div>
            </div>
        </Link>
    );
}

export default Card;

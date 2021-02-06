import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({id, name, image, scrollPosition}) => {
    return(
        <Link to={`/beach/${id}/`}>
            <div className="card">
                <div className="card-name">
                    <h1>{name}</h1>
                </div>
                <div className="card-body">
                    <LazyLoadImage
                        className="lazy-image"
                        effect="blur"
                        src={image}
                        alt={name}
                        width="100%"
                        height="100%"
                        scrollPosition={scrollPosition} />
                </div>
            </div>
        </Link>
    );
}

export default Card;

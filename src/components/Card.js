import React from 'react'
import { Link } from "react-router-dom";
import './styles/Card.css'

export default class Card extends React.Component {
    render() {
        const { id, name, image } = this.props
        return (
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
        )
    }
}

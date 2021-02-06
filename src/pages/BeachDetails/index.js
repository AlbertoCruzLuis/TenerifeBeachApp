import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import API_URL from 'config'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import './style.css'

const BeachDetails = () => {
    const [beach, setBeach] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios.get(API_URL + `beach/${id}/`).then(
            res => {
                console.log(res)
                setBeach(res.data)
            }
        ).catch()
    },[id])

    const { name, image, location, length, composition } = beach;

    return (
        <Fragment>
            <div className="header">
                <Navbar />
            </div>
            <div className="main">
                <div className="container-beach">
                    <div className="name">
                        <h1>{name}</h1>
                    </div>
                    <div className="image">
                        <img src={image} alt={name}/>
                    </div>
                    <div className="details-container">
                        <h2>Datos sobre {name}</h2>
                        <hr/>
                        <div className="details">
                            <p><strong>➤ Location: </strong>{location}</p>
                            <p><strong>➤ Length: </strong>{length}</p>
                            <p><strong>➤ Composition: </strong>{composition}</p>
                        </div>
                    </div>
                </div>
                <div className="space"></div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </Fragment>
    )
}

export default BeachDetails
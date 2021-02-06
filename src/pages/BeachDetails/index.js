import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import Layout from 'pages/Layout'
import { useHistory } from 'react-router-dom'
import { Helmet } from "react-helmet";
import Maps from 'components/Maps'
import { getBeach } from 'services/DataService'

const BeachDetails = () => {
    const [beach, setBeach] = useState([])
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        getBeach(id, setBeach, history)
    },[id,history])

    const { name, image, location, length, composition } = beach;
    const maplinks = require('data/PlaceLinks.json')
    const maplink = maplinks[id].maplink;

    return (
        <Fragment>
            <Helmet>
                <meta
                name="description"
                content={`Tenerife Beach App. Conoce que hacer, como llegar o de que esta hecha la ${name}`}
                />
                <title>{`Descubre la ${name} | Tenerife Beach App`}</title>
            </Helmet>
            <Layout>
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
                <div className="maps">
                    <Maps mapLink={maplink} />
                </div>
            </Layout>
        </Fragment>
    )
}

export default BeachDetails
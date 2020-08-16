import React, { Component, Fragment } from 'react'
import axios from 'axios'
import API_URL from '../config'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../components/styles/BeachDetails.css'

export default class BeachDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beach: [],
        }
    }

    componentDidMount() {

        const { id } = this.props.match.params

        axios.get(API_URL + `beach/${id}/`).then(
            res => {
                console.log(res)
                this.setState({ beach: res.data })
            }
        ).catch()
    }

    render() {
        const { name, image, location, length, composition } = this.state.beach
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
}

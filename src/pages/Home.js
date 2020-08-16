import React, { Fragment } from 'react'
import '../components/styles/Home.css'
import ListCard from '../components/ListCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => (
    <Fragment>
        <div className="header">
            <Navbar />
        </div>
        <div className="main">
            <div className="container">
                <p>Conoce las mejores Playas de Tenerife</p>
            </div>
            <ListCard />
        </div>
        <div className="footer">
            <Footer />
        </div>
    </Fragment>
)

export default Home
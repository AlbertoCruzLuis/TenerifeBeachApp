import React, { Fragment } from 'react'
import '../components/styles/Errors.css'
import NotFound from '../components/Errors/404'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Errors = () => (
    <Fragment>
        <div className="header">
            <Navbar />
        </div>
        <div className="main">
            <NotFound />
        </div>
        <div className="footer">
            <Footer />
        </div>
    </Fragment>
)

export default Errors
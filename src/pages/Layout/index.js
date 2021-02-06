import React, { Fragment } from 'react'
import './style.css'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const Layout = ({children}) => (
    <Fragment>
        <header>
          <Navbar />
        </header>
        <main>
          { children }
        </main>
        <footer>
          <Footer />
        </footer>
    </Fragment>
)

export default Layout
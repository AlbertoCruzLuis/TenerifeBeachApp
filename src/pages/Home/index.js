import React, { Fragment } from 'react'
import './style.css'
import ListCard from 'components/ListCard'
import { Helmet } from "react-helmet";
import Layout from 'pages/Layout'

const Home = () => (
    <Fragment>
        <Helmet>
            <meta
            name="description"
            content="Las mejores playas de Tenerife para hacer turismo las podras encontrar en esta pagina web.
            "
            />
            <title>Tenerife Beach App</title>
        </Helmet>
        <Layout>
            <div className="container">
                <p>Conoce las mejores Playas de Tenerife</p>
            </div>
            <ListCard />
        </Layout>
    </Fragment>
)

export default Home
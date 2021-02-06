import React from 'react'
import './style.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'
import BeachDetails from 'pages/BeachDetails'
import Errors from 'pages/Errors'

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beach/:id" component={BeachDetails} />
            <Route component={Errors} />
        </Switch>
    </HashRouter>
)

export default App
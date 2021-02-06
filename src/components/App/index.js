import React, { Suspense, lazy } from 'react'
import './style.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Spinner from 'components/Spinner'

const Home = lazy(() => import('pages/Home'))
const BeachDetails = lazy(() => import('pages/BeachDetails'))
const Errors = lazy(() => import('pages/Errors'))

const App = () => (
    <HashRouter>
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/beach/:id" component={BeachDetails} />
                <Route component={Errors} />
            </Switch>
        </Suspense>
    </HashRouter>
)

export default App
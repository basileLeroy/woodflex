import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Error } from './pages/error';
import { Home } from './pages/home';
import { Navigation, Footer} from "./components/nav";
import {Approach, Circular, Modular, Sustainability, Timber} from "./pages/about-us";

const App = () => {
    return (
        <div className="App">
            <Navigation />
            <div className="container w-nine shadow-lg mx-auto bg-white mt-24 md:mt-18">
                <Switch>
                    <Route path="/" exact component={ Home } />

                    {/*About us*/}
                    <Route path="/about-us/circular" exact component={ Circular } />
                    <Route path="/about-us/modular" exact component={ Modular } />
                    <Route path="/about-us/our-approach" exact component={ Approach } />
                    <Route path="/about-us/sustainability" exact component={ Sustainability } />
                    <Route path="/about-us/timber-structure" exact component={ Timber } />

                    {/*Services*/}
                    {/*<Route path="/services/construction" exact component={ Error } />*/}
                    {/*<Route path="/services/expanding" exact component={ Error } />*/}
                    {/*<Route path="/services/facades" exact component={ Error } />*/}
                    {/*<Route path="/services/renovations" exact component={ Error } />*/}

                    {/*Projects*/}
                    <Route path="/projects" exact component={ Error } />

                    {/*404 page & redirect*/}
                    <Route path="/404" component={ Error } />
                    <Redirect to="/404" />
                </Switch>
            </div>
            <Footer />
        </div>
    );
};

export default App;
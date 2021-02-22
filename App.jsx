import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { Route, Switch} from "react-router";


const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact  path="/">
                     <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>

                <Route  exact path="/service">
                    <Service />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
            <Footer/>
        </>
    )
}
export default App;

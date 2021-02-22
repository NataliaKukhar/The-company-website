import React from 'react';
import web from "../images/webdevelopment.png";
import {NavLink} from 'react-router-dom';
import Commom from "./Elements/Commom";
const Home = () =>{
    return (
        <>
            <Commom
                name="Grow your business with "
                imgsrc={web} visit="/service"
                btnname="Get Started"
            />
        </>
    );
};
export default Home;
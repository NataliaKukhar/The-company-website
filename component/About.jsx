import React from 'react';
import web from "../images/team.svg";
import Commom from "./Elements/Commom";

const About = () => {
    return (
        <>
          <Commom
              name="Welcome to About page"
              imgsrc={web} visit="/contact"
              btnname="Contact Now"
          />
        </>
    );
};
export default About;
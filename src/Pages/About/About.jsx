import React from 'react';
import Navbar from '../0Components/Navbar/Navbar';
import "./About.css";

const About = () => {
    return(
        <div className="about-page">
            <Navbar/>
            <div className='about-blurb'>
                <p className='about-blurb-header'>Welcome to Park Diary...</p>
                <p className='about-blurb-par'>Park Diary allows information to be gained about any U.S National Park with the click of a button. 
                    This site uses the National Park Service API to retrieve relevant information such as location, contacts, fun facts and more. 
                    To get started, type any U.S National Park into the searchbar to find out more information about that park. Have fun!
                </p>
                <p className='about-blurb-signature'>- ANH</p>
            </div>
        </div>
    )
}

export default About



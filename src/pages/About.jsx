// src/pages/NewPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import Email from '../components/Email';

const About = () => {

    return (
        <div>
            <Socials />
            <Navbar />
            <Email />
            <Footer />
        </div>
    );
};

export default About;

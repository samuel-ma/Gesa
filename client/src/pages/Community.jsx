import React from 'react'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import Email from '../components/Email'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import Hero from '../components/Hero'


function Community() {
    return (
        <div>
            <Socials />
            <Navbar />
            <Hero />
            <Profile />
            <Email />
            <Footer />
        </div>
    )
}

export default Community
import './App.css'

// import Hero from './components/Hero'
// import Offices from './components/Offices'
// import Services from './components/Services'

import Email from './components/Email'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Hero2 from './components/Hero2'
import Navbar from './components/Navbar'
import Socials from './components/Socials'
import Stats from './components/Stats'
import Trainees from './components/Trainees'
import footerimg from "./assets/wave.svg";

function App() {

    return (
        <div className="App">

            <Socials />
            <Navbar />
            {/* <Hero/> */}
            <Hero2 />
            {/* <Stats /> */}
            {/* <Services /> */}
            {/* <Trainees /> */}
            {/* <Offices /> */}
            {/* <Faqs /> */}
            <Email />
            <Footer />

            <div className="footerimg">
                <img src={footerimg} alt="footer_img" />
            </div>
        </div>
    )
}

export default App



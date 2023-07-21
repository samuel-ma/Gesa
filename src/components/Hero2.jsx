
import "../styles/Hero2.css"
import sharing from "../assets/hero (16).svg"
// import sharing from "../assets/hero (19).svg"

function Hero2() {
    return (
        <div className="hero2">
            <div className="hero-left">
                <h1 className="better better1">Greater</h1>
                <h1 className="better better2 dot2">Equatorial</h1>
                <h1 className="better better3">Students Association<span className="dot3">.</span><span className="dot3">.</span><span className="dot3">.</span></h1>
            </div>

            <div className="hero-right">
                <img className="sharing" src={sharing} alt="sharing" />
            </div>
        </div>
    )
}

export default Hero2
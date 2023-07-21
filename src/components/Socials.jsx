
import "../styles/Socials.css"
import { BsFacebook, BsFillTelephoneForwardFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Socials() {
    return (
        <div className="socials">
            <div className="icons">
                <div className="icon">
                    <SiGmail />
                </div>
                <p>Gmail</p>
            </div>
            <div className="icons">
                <div className="icon">
                    <BsFacebook />
                </div>
                <p>Facebook</p>
            </div>

            <div className="icons2">
                <div className="icon">
                    <BsFillTelephoneForwardFill />
                </div>
                <p>Mobile</p>
            </div>
        </div>
    )
}

export default Socials
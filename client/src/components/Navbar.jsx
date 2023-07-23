
import "../styles/Navbar.css"
import { BiChevronDown } from "react-icons/bi";
import { TbWorldDownload } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftnav">
                <Link to="/">Gesa</Link>
            </div>

            <div className="midnav">
                <div className="acc2">
                    <Link to="/about">About</Link>
                </div>

                <div className="acc">
                    <Link to="/events">Events</Link>
                    <BiChevronDown />
                </div>

                <div className="acc">
                    <Link to="/community">Community</Link>
                    <BiChevronDown />
                </div>

                <div className="acc2">
                    <Link to="/leaders">Leaders</Link>
                </div>
            </div>

            <div className="rightnav">
                <div className="call">
                    Join
                </div>

                <div className="acc">
                    <div className="profile">
                        <TbWorldDownload />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import React, {useState} from "react"
import {Link} from "react-router-dom"
import "./Navbar.css"


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
        <h3 className="logo">Sparkle!</h3>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
            <Link to="/billing" className="billing">
                <li>Billing</li>
            </Link>
            <Link to="/refund" className="refund">
                <li>Refund</li>
            </Link>
            <Link to="/rental" className="rental">
                <li>Rental</li>
            </Link>
            <Link to="/repair" className="repair">
                <li>Repair</li>
            </Link>
            <Link to="/signin" className="signin">
                <li>Sign in</li>
            </Link>
            </ul>
            <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
                {isMobile ? (
                <i className="fa fa-times"></i>
                ) : (
                <i className="fa fa-bars"></i>
                )}
            </button>
    </nav>
  )
}

export default Navbar
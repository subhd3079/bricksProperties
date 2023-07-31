import { NavLink } from "react-router-dom"

import "../css/common.css"
import "../css/navbar.css"
import { HashLink } from "react-router-hash-link"

function Navbar() {

  // const activeStyle = {
  //   borderBottom: "2px solid white"
  // }

  const inActiveStyle = {
    borderBottom: "2px solid transparent"
  }

  const activeStyleForButton = {
    borderBottom: "2px solid transparent"
  }

  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="logoSection">
          <NavLink to="/"><img src="https://i.ibb.co/0ChKc66/fullLogo.png" /></NavLink>
        </div>
        <div className="menuSection">
          <HashLink smooth to="/#" >Home</HashLink>
          <HashLink smooth to="/#properties" >Properties</HashLink>
          <HashLink smooth to="/#interior" >Interior</HashLink>
          <HashLink smooth to="/#aboutus">About Us</HashLink>
          <HashLink smooth to="/#services">Services</HashLink>
          <NavLink to="/contactus" style={({ isActive }) => isActive ? activeStyleForButton : inActiveStyle}><button className="yellowGhostButton">Join Us</button></NavLink>
        </div>
        <div className="menuButton"><img src="https://i.ibb.co/GTCZLYB/134216-menu-lines-hamburger-icon.png" /></div>
      </div>
    </div>
  )
}

export default Navbar
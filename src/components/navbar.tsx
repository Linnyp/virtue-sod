import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import mainLogo from "../assets/images/virtueLogoLayersRed2.png";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);

  useEffect(() => {
    // Update the currentRoute state whenever the location changes
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  const navStyles = function () {
    if (currentRoute !== "/virtue-sod/") {
      return {
        margin: "1rem",
        width: "120px",
      };
    }
  };

  const navbarStyles = navStyles();

  const visibleToggle = function () {
    visible ? setVisible(false) : setVisible(true);
  };

  return (
    <>
      <div
        id="navbar"
        style={
          currentRoute !== "/virtue-sod/"
            ? { position: "static", flexDirection: "row" }
            : {}
        }
      >
        <img src={mainLogo} style={{ ...navbarStyles }} alt="" />
        <ul id="nav-links" data-visible={`${visible}`} onClick={visibleToggle}>
          <a href="/virtue-sod/#about-contain">about us</a>
          <a href="/virtue-sod/#services-contain">services</a>
          {/* <Link to="/#services-contain">Services</Link> */}
          <Link to="/types"> Types</Link>
          <Link to="/maintenance"> Maintenance & Care</Link>
          <Link to="/estimates">Contact</Link>
        </ul>

        {/* Burger menu wrapper */}
        {/* <div className="burger-wrap" aria-expanded={`${visible}`}>
        </div> */}

        <button
          className="burger"
          aria-expanded={`${visible}`}
          onClick={visibleToggle}
        ></button>
      </div>
      {/* <div className="wave-bottom"></div> */}
    </>
  );
}

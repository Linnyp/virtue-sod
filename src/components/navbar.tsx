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
    if (currentRoute !== "/") {
      return {
        margin: "1.5rem",
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
          currentRoute !== "/"
            ? { position: "static", flexDirection: "row" }
            : {}
        }
      >
        <img src={mainLogo} style={{ ...navbarStyles }} alt="" />
        <ul id="nav-links" data-visible={`${visible}`}>
          <a href="/#about-contain">about us</a>
          <a href="/#services-contain">services</a>
          <Link to="types"> Types</Link>
          <Link to="maintenance"> Maintenance & Care</Link>
          <Link to="estimates">Contact</Link>
        </ul>
        <div className="burger-wrap" aria-expanded={`${visible}`}>
          <button
            className="burger"
            aria-expanded={`${visible}`}
            onClick={visibleToggle}
          ></button>
        </div>
      </div>
      {/* <div className="wave-bottom"></div> */}
    </>
  );
}

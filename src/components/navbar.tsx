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
        left: "0",
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
            ? {
                position: "static",
                flexDirection: "row-reverse",
              }
            : {}
        }
      >
        <ul id="nav-links" data-visible={`${visible}`} onClick={visibleToggle}>
          <a href="/#about-contain">about us</a>
          <a href="/#services-contain">services</a>
          <Link to="/types"> Types</Link>
          <Link to="/contact">Contact</Link>
        </ul>
        <img src={mainLogo} style={{ ...navbarStyles }} alt="" />

        <button
          className="burger"
          aria-expanded={`${visible}`}
          onClick={visibleToggle}
        ></button>
      </div>
    </>
  );
}

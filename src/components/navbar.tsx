import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import mainLogo from "../assets/images/squareLogo3.3.png";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);

  useEffect(() => {
    // Update the currentRoute state whenever the location changes
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  const visibleToggle = function () {
    visible ? setVisible(false) : setVisible(true);
  };

  return (
    <>
      <div id="navbar" className="static flex-row">
        <img src={mainLogo} alt="" />
        <ul id="nav-links" data-visible={`${visible}`} onClick={visibleToggle}>
          <a className="text-accented" href="/#about-contain">
            about
          </a>
          <a href="/#services-contain">services</a>
          <Link to="/types"> Types</Link>
          <Link to="/contact">Contact</Link>
        </ul>

        <button
          className="burger"
          aria-expanded={`${visible}`}
          onClick={visibleToggle}
        ></button>
      </div>
    </>
  );
}

import React from "react";
import "./Header.css";
import Logo from "../../assets/white logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="logo-img" className="logo" />

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="img-bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          ></img>
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link onClick={() => setMenuOpened(false)} to="home" smooth={true}>
              {" "}
              Home
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              smooth={true}
            >
              My Skills
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              smooth={true}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="experience"
              smooth={true}
            >
              Experience
            </Link>
          </li>

          <li>
            <Link onClick={() => setMenuOpened(false)} to="plans" smooth={true}>
              Cool Projects
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../assets/facebook-brands.svg";
import twiterIcon from "../assets/twitter-brands.svg";
import instagramIcon from "../assets/instagram-brands.svg";
import youtubeIcon from "../assets/youtube-brands.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <ul className="footerMenu">
          <li className="footerMenuItem">
            {" "}
            <Link className="linkMenu" to="/auth/home">
              Inicio{" "}
            </Link>
          </li>

          <li className="footerMenuItem">
            <Link className="linkMenu" to="/auth/list">
              Criptomonedas
            </Link>
          </li>
        </ul>

      </div>
      <hr />
      <div className="footerMenuIcons">
        <img className="footerItemIcon" src={facebookIcon} alt="facebookicon" />
        <img className="footerItemIcon" src={twiterIcon} alt="twitericon" />
        <img
          className="footerItemIcon"
          src={instagramIcon}
          alt="instagranicon"
        />
        <img className="footerItemIcon" src={youtubeIcon} alt="youtubeicon" />
      </div>
      <div className="footerBy">
        {/* <FontAwesomeIcon className="footerCopyIcon" icon={faCopyright} /> */}
        <span>2022 - JeisonImbana - CriptoDolar </span>
      </div>
    </div>
  );
};

export default Footer;

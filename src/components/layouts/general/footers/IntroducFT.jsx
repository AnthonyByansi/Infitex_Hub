import React from 'react';
import { Link } from 'react-router-dom';

const IntroducFT = () => {
  return (
    <div className="widget-about">
      <div id="logo-ft">
        <Link to="/"><img src="images/logo/logo-ft.png" alt="INFITX Empowerment Hub" width={157} height={29} /></Link>
      </div>
      <p className="description">Welcome to the INFITX Empowerment Hub! We are dedicated to empowering women through financial literacy, microfinance, and investment opportunities.</p>
      <div className="list-info">
        <ul>
          <li className="address">
            <Link to="#">1107 Wood Street, Saginaw, MI, New York 48607</Link>
          </li>
          <li className="phone">
            <Link to="#">+256 787 686 313</Link>
          </li>
          <li className="mail">
            <Link to="mailto:info@infitxempowermenthub.com">info@infitxempowermenthub.com</Link>
          </li>
        </ul>
      </div>
      <div className="socials">
        <ul className="list">
          <li>
            <Link to="#"><span className="fa fa-twitter" /></Link>
          </li>
          <li>
            <Link to="#"><span className="fa fa-linkedin" /></Link>
          </li>
          <li>
            <Link to="#"><span className="fa fa-facebook" /></Link>
          </li>
          <li>
            <Link to="#"><span className="fa fa-instagram" /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IntroducFT;

import { NavLink } from "react-router-dom";

import { FBPng, IGPng, LinePng } from "assets-images/social-media";
import { CallSvg, MailSvg } from "assets-images/icons";

export default function Footer() {
  return (
    <footer className="bg-primary-400 clr-neutral-100 | footer">
      <div className="container | footer__container">
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">首頁</NavLink>
            </li>
            <li>
              <NavLink to="/products/optical">系列鏡框</NavLink>
            </li>
            <li>
              <NavLink to="/stores">門市據點</NavLink>
            </li>
            <li>
              <NavLink>部落格</NavLink>
            </li>
            <li>
              <NavLink>常見問題</NavLink>
            </li>
          </ul>
        </nav>
        <ul className="footer__social-media">
          <li>
            <a href="#">
              <img src={FBPng} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={IGPng} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={LinePng} alt="line" />
            </a>
          </li>
        </ul>
        <div className="footer__contact">
          <div className="d-flex align-items-center">
            <img src={CallSvg} alt="phone" />
            <span>0800-000-00</span>
          </div>
          <div className="d-flex align-items-center">
            <img src={MailSvg} alt="email" />
            <span>glasses@business.co</span>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="font-roboto">
            Copyright © 2020 Glasses.All rights reserved.
          </div>
          <div>
            <a href="#">隱私權政策</a>
          </div>
          <div>
            <a href="#">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

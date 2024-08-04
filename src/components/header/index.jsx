import { NavLink } from "react-router-dom";

import { Logo1xPng, Logo2xPng } from "assets-images/logo";

export default function Header() {
  return (
    <header className="bg-primary-400 | header">
      <div className="container | header__container">
        <div className="header__logo">
          <img
            alt="logo"
            src={Logo1xPng}
            srcSet={`${Logo2xPng} 2x, ${Logo1xPng} 1x`}
            width={80}
          />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink>系列鏡框</NavLink>
            </li>
            <li>
              <NavLink>門市據點</NavLink>
            </li>
            <li>
              <NavLink>部落格</NavLink>
            </li>
            <li>
              <NavLink>常見問題</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

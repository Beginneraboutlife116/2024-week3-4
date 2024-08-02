import { NavLink } from "react-router-dom";

import LogoPng1x from "../../assets/images/logo/logo-1x.png";
import LogoPng2x from "../../assets/images/logo/logo-2x.png";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <picture>
          <source srcSet={`${LogoPng1x} 1x, ${LogoPng2x} 2x`} />
          <img alt="logo" src={LogoPng1x} />
        </picture>
        <nav>
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

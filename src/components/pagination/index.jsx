import { NavLink } from "react-router-dom";

export default function Pagination() {
  return (
    <ul className="pagination">
      <li>
        <NavLink to="/">上一頁</NavLink>
      </li>
      <li>
        <NavLink to="/">1</NavLink>
      </li>
      <li>
        <NavLink to="/" className="active">
          2
        </NavLink>
      </li>
      <li>
        <NavLink to="/">3</NavLink>
      </li>
      <li>
        <NavLink to="/">4</NavLink>
      </li>
      <li>
        <NavLink to="/">5</NavLink>
      </li>
      <li>
        <NavLink to="/">下一頁</NavLink>
      </li>
    </ul>
  );
}

import { NavLink } from "react-router-dom";

export default function Pagination() {
  return (
    <ul className="pagination">
      <li>
        <NavLink>上一頁</NavLink>
      </li>
      <li>
        <NavLink>1</NavLink>
      </li>
      <li>
        <NavLink className="active">2</NavLink>
      </li>
      <li>
        <NavLink>3</NavLink>
      </li>
      <li>
        <NavLink>4</NavLink>
      </li>
      <li>
        <NavLink>5</NavLink>
      </li>
      <li>
        <NavLink>下一頁</NavLink>
      </li>
    </ul>
  );
}

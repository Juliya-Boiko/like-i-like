import { NavLink, Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="portfolio">Portfolio</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
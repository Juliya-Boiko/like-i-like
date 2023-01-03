// import { NavLink } from "react-router-dom";
import { NavList, NavItem, NavItemLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavList>
      <NavItem>
        <NavItemLink to="/">Home</NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="portfolio">Portfolio</NavItemLink>
      </NavItem>
    </NavList>
  );
};
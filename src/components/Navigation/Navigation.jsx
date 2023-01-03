import { NavList, NavItem, NavItemLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <NavList>
      <NavItem>
        <NavItemLink to="/">Main</NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="portfolio">Portfolio</NavItemLink>
      </NavItem>
    </NavList>
  );
};
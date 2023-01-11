import { NavList, NavItem, NavItemLink, NavItemText, NavIconHome, NavIconPortfolio } from "./Navigation.styled";

export const Navigation = () => {

  return (
    <NavList>
      <NavItem>
        <NavItemLink to="/">
          <NavIconHome size="20px"/>
          <NavItemText>Main</NavItemText>
        </NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="portfolio">
          <NavIconPortfolio size="20px" />
          <NavItemText>Portfolio</NavItemText>
        </NavItemLink>
      </NavItem>
    </NavList>
  );
};
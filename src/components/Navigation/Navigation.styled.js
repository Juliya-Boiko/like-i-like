import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin: 0 25px 0 0;
  }
`;

export const NavItemLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeight.light};
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};

  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;
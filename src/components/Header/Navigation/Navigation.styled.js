import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiFillAppstore } from "react-icons/ai";

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
  font-size: 24px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};

  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const NavItemText = styled.span`
  display: none;
  @media screen and (min-width: 375px) {
    display: block;
  }
`;

export const NavIconHome = styled(AiOutlineHome)`
  @media screen and (min-width: 375px) {
    display: none;
  }
`;

export const NavIconPortfolio = styled(AiFillAppstore)`
  @media screen and (min-width: 375px) {
    display: none;
  }
`;
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiFillAppstore } from "react-icons/ai";
import { animated_text } from "components/common/animations";

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
  transition: all 300ms ease-in-out;

  &:hover {
    animation: ${animated_text} 10s ease infinite;
  }
`;

export const NavItemText = styled.span`
  display: none;
  @media screen and (min-width: 425px) {
    display: block;
  }
`;

export const NavIconHome = styled(AiOutlineHome)`
  @media screen and (min-width: 425px) {
    display: none;
  }
`;

export const NavIconPortfolio = styled(AiFillAppstore)`
  @media screen and (min-width: 425px) {
    display: none;
  }
`;
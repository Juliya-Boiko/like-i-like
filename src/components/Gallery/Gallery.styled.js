import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { animated_text } from "components/common/animations";

export const GalleryLink = styled(NavLink)`
  width: 320px;
  height: 50px;
  margin: 48px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 12px;
  color: ${p => p.theme.colors.white};
  background-color: #131313;
  @media screen and (min-width: 425px) {
    font-size: 24px;
  }
  &:hover {
    animation: ${animated_text} 10s ease infinite;
  }
  transition: all 300ms ease-in-out;
`;
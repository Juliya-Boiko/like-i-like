import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const GalleryLink = styled(NavLink)`
  width: 320px;
  height: 50px;
  margin: 48px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 24px;
  color: ${p => p.theme.colors.white};
  background-color: #131313;
`;
import styled from "styled-components";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const ScrollBlock = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    color: ${p => p.theme.colors.accent};
  }
  transition: all 300ms ease-in-out;
`;

export const ScrollIcon = styled(BsFillArrowUpCircleFill)`
  position: fixed;
  bottom: 40px;
  right: 25px;
  z-index: 20;
`;

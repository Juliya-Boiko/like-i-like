import styled from "styled-components";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { animated_text } from "components/common/animations";

export const ScrollBlock = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    animation: ${animated_text} 10s ease infinite;
  }
  transition: all 300ms ease-in-out;
`;

export const ScrollIcon = styled(BsFillArrowUpCircleFill)`
  position: fixed;
  bottom: 40px;
  right: 25px;
  z-index: 20;
`;

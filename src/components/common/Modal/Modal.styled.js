import styled from "styled-components";
import { animated_text } from "components/common/animations";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const ModalContent = styled.div`
  position: relative;
`;

export const ModalImg = styled.img`
  display: block;
  width: 300px;

  @media screen and (min-width: 900px) {
    width: 600px;
  }
`;

export const ModalBtn = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  padding: 0;
  border: none;
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  background-color: transparent;
  transition: all 300ms ease-in-out;
  &:hover {
    animation: ${animated_text} 10s ease infinite;
  }

  @media screen and (min-width: 900px) {
    top: -40px;
    right: -40px;
  }
`;

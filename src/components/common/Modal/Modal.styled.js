import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const ModalOverlay = styled.div`
  position: absolute;
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
 // background-color: white;
`;

export const ModalImg = styled.img`
  display: block;
  width: 300px;
`;

export const ModalBtn = styled.button`
  position: absolute;
  top: -40px;
  right: -40px;
  padding: 0;
  border: none;
  color: ${p => p.theme.colors.white};

  //background-color: transparent;
`;

export const ModalBtnIcon = styled(GrClose)`
  color: ${p => p.theme.colors.white};

  //color: inherit;
`;
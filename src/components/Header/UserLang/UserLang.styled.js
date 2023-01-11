import styled from "styled-components";
import { MdLanguage } from "react-icons/md";

export const LangBtn = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  color: ${p => p.theme.colors.white};
  background-color: transparent;
`;

export const LangIcon = styled(MdLanguage)`
  /* @media screen and (min-width: 425px) {
    display: none;
  } */
`;
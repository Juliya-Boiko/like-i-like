import styled from "styled-components";
import { MdLanguage } from "react-icons/md";

export const LangList = styled.ul`
  display: none;
  @media screen and (min-width: 425px) {
    display: flex;
  }
`;

export const LangItem = styled.li`
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: 24px;

  &:hover {
    color: ${p => p.theme.colors.accent};
  }

  &:not(:last-child) {
    margin: 0 5px 0 0;
  }
`;

export const LangBtn = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  color: ${p => p.theme.colors.white};
  background-color: transparent;
`;

export const LangIcon = styled(MdLanguage)`
  @media screen and (min-width: 425px) {
    display: none;
  }
`;
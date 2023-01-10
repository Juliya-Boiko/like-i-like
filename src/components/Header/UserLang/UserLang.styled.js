import styled from "styled-components";
import { MdLanguage } from "react-icons/md";


export const LangList = styled.ul`
  display: none;
  @media screen and (min-width: 375px) {
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

export const LangIcon = styled(MdLanguage)`
  @media screen and (min-width: 375px) {
    display: none;
  }
`;
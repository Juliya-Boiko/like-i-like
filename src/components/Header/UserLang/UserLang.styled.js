import styled from "styled-components";

export const LangList = styled.ul`
  display: flex;
  align-items: center;
`;

export const LangItem = styled.li`
  &:not(:last-child) {
    margin: 0 15px 0 0;
  }
`;

export const LangBtn = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  color: ${p => p.theme.colors.white};
  background-color: transparent;
`;
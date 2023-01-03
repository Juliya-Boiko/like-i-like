import styled from "styled-components";

export const LangList = styled.ul`
  display: flex;
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
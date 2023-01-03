import styled from "styled-components";

export const AddressItem = styled.li`
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: 18px;

  &:not(:last-child) {
    margin: 0 0 18px 0;
  }

  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const AddressLink = styled.a`
  color: inherit;
`;
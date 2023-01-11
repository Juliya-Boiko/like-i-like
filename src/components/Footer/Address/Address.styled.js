import styled from "styled-components";

export const AddressItem = styled.li`
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: 12px;

  &:not(:last-child) {
    margin: 0 0 18px 0;
  }

  &:hover {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 425px) {
    font-size: 18px;
  }
`;

export const AddressLink = styled.a`
  color: inherit;
`;

export const AddressList = styled.address`
  margin: 30px 0;
  @media screen and (min-width: 425px) {
    margin: 0;
  }
`;
import styled from "styled-components";

export const PriceList = styled.ul`
  padding: 0 35px;
  background-color: ${p => p.theme.colors.black};
  @media screen and (min-width: 425px) {
    padding: 0 70px;
  }
`;

export const PriceListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 12px;
  &:not(:last-child) {
    border-bottom: 3px solid #202020;
  }
  @media screen and (min-width: 425px) {
    font-size: 24px;
    padding: 20px 0;
  }
`;

export const PriceTitle = styled.span`
  font-style: italic;
  font-weight: ${p => p.theme.fontWeight.thin};
`;

export const PriceAmount = styled.span`
  font-weight: ${p => p.theme.fontWeight.light};
`;
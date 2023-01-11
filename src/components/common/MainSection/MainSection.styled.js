import styled from "styled-components";

export const TitleBlock = styled.div`
  padding: 15px 0;
  background-color: ${p => p.theme.colors.black};
  @media screen and (min-width: 375px) {
     padding: 25px 0;
  }
`;

export const TitleText = styled.span`
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 12px;
  line-height: 28px;
  @media screen and (min-width: 425px) {
    font-size: 24px;
  }
`;

export const TitleSymbol = styled.span`
  margin: 0 15px;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 18px;
  @media screen and (min-width: 425px) {
     font-size: 36px;
  }
`;

export const TitleAccent = styled.span`
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 18px;
  @media screen and (min-width: 425px) {
     font-size: 36px;
  }
`;

export const SectionContent = styled.div`
  padding: 30px 0;
  @media screen and (min-width: 425px) {
    padding: 85px 0;
  }
`;
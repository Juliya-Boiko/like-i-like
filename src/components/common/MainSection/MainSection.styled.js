import styled from "styled-components";

export const TitleBlock = styled.div`
  padding: 25px 0;
  background-color: ${p => p.theme.colors.black};
`;

export const TitleText = styled.span`
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 24px;
  line-height: 28px;
`;

export const TitleSymbol = styled.span`
  margin: 0 15px;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 36px;
  line-height: 42px;
`;

export const TitleAccent = styled.span`
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 36px;
  line-height: 42px;
`;

export const SectionContent = styled.div`
  padding: 85px 0;
`;
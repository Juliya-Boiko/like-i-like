import styled from "styled-components";

export const AboutText = styled.p`
  font-style: italic;
  font-weight: ${p => p.theme.fontWeight.thin};
  font-size: 12px;
  @media screen and (min-width: 425px) {
    font-size: 24px;
  }
`;

export const AboutAccent = styled.span`
  text-transform: uppercase;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.bold};
`;
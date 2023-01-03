import styled from "styled-components";

export const AboutText = styled.p`
  font-style: italic;
  font-weight: ${p => p.theme.fontWeight.thin};
  font-size: 24px;
  line-height: 28px;
`;

export const AboutAccent = styled.span`
text-transform: uppercase;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.bold};
`;
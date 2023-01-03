import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 60px 0;
  background-color: ${p => p.theme.colors.black};
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
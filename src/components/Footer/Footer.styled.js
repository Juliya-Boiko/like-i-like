import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 30px 0;
  background-color: ${p => p.theme.colors.black};
  @media screen and (min-width: 375px) {
    padding: 60px 0;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 375px) {
    flex-direction: row;
  }
`;
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 15px 0;
  background-color: ${p => p.theme.colors.black};
  @media screen and (min-width: 425px) {
    padding: 25px 0;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
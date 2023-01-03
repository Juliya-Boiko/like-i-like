import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 25px 0;
  background-color: ${p => p.theme.colors.black};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
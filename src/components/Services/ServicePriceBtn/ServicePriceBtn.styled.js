import styled from "styled-components";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";

export const PriceBtn = styled.button`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: start;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 12px;
  text-transform: uppercase;
  border: 3px solid #131313;
  color: ${p => p.theme.colors.white};
  background-color: transparent;
  @media screen and (min-width: 425px) {
    font-size: 24px;
    padding: 20px 40px;
  }
`;

export const BtnIconDown = styled(GoTriangleDown)`
  margin: 0 25px 0 0;
`;

export const BtnIconRight = styled(GoTriangleRight)`
  margin: 0 25px 0 0;
`;
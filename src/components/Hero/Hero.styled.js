import styled from "styled-components";
import BgiImgSrc from '../../images/hero-bgi.png';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px 0;
  background-image: url(${BgiImgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (min-width: 425px) {
    padding: 170px 0;
  }
`;

export const HeroTitle = styled.h1`
  display: block;
  max-width: 800px;
  margin: 50px 0 0 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 30px;
  line-height: 56px;
  text-align: center;
  @media screen and (min-width: 425px) {
     font-size: 48px;
  }
`;
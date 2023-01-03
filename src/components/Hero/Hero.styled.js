import styled from "styled-components";
import BgiImgSrc from '../../images/hero-bgi.png';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 170px 0;
  background-image: url(${BgiImgSrc});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeroTitle = styled.h1`
  display: block;
  max-width: 800px;
  margin: 50px 0 0 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: 48px;
  line-height: 56px;
  text-align: center;
`;
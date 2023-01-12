import styled from "styled-components";
import { BsFilePerson } from "react-icons/bs";
import { animated_text, animated_bg } from "components/common/animations";

export const TeamList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TeamItem = styled.li`
  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin: 0 40px 0 0;
    }
  }
`;

export const TeamCard = styled.div`
  position: relative;
  background-color: #222;
  padding: 30px;
  text-align: center;

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, #00CAB1, #7B00FF);
    background-size: 200% 200%;
    transform: scale(0.95);
    filter: blur(2vw);
    z-index: -1;
    animation: ${animated_bg}g 2s ease infinite;
  }
`;

export const TeamPhoto = styled(BsFilePerson)`
  margin: 0 0 40px 0;
`;

export const TeamName = styled.p`
  margin: 0 0 10px 0; 
  text-transform: uppercase;
  font-size: 18px;
  @media screen and (min-width: 425px) {
     font-size: 36px;
  }
  animation: ${animated_text} 10s ease infinite;  
`;

export const TeamPosition = styled.p`
  text-transform: uppercase;
  font-size: 18px;
  @media screen and (min-width: 425px) {
    font-size: 36px;
  }
`;
import { HeroContainer, HeroTitle } from "./Hero.styled";
import { Logo } from "components/Logo/Logo";

export const Hero = () => {
  return (
    <HeroContainer>
      <Logo width="191px" height="111px" />
      <HeroTitle>Architectural and construction company</HeroTitle>
    </HeroContainer>
  );
};
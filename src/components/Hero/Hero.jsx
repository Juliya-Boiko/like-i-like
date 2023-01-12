import { useTranslation } from "react-i18next";
import { HeroContainer, HeroTitle } from "./Hero.styled";
import { Logo } from "components/Logo/Logo";

export const Hero = () => {
  const { t } = useTranslation();  

  return (
    <HeroContainer>
      <Logo width="191px" height="111px" />
      <HeroTitle>
        {t('hero_title')}
      </HeroTitle>
    </HeroContainer>
  );
};
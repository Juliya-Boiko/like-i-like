import { useTranslation } from "react-i18next";
import { AboutText, AboutAccent } from "./About.styled";

export const About = () => {
  const { t } = useTranslation();  

  return (
    <AboutText> <AboutAccent>like i like - </AboutAccent>
       {t('about_text')}
    </AboutText>
  );
};
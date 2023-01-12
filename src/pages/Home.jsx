import { useTranslation } from "react-i18next";
import { Hero } from "components/Hero/Hero";
import { MainSection } from "components/common/MainSection/MainSection";
import { About } from "components/About/About";
import { GallerySlider } from "components/Gallery/Gallery";
import { Services } from "components/Services/Services";
import { Team } from "components/Team/Team";
import { Contacts } from "components/Contacts/Contacts";
import { Scroll } from "components/common/Scroll/Scroll";

export const Home = () => {
  const { t } = useTranslation();  

  return (
    <>
      <Scroll />
      <Hero />
      <MainSection descr={t('our_story')} title={t('about_us')}>
        <About />
      </MainSection>
      <MainSection descr={t('our_works')} title={t('portfolio')}>
        <GallerySlider />
      </MainSection>
      <MainSection descr={t('what_we_do')} title={t('services')}>
        <Services />
      </MainSection>
      <MainSection descr={t('team')} title={t('designers')}>
        <Team />
      </MainSection>
      <MainSection descr={t('find_us')} title={t('contact_us')}>
        <Contacts />
      </MainSection>
    </>
  );
};
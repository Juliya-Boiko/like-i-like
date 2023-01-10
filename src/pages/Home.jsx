import { Hero } from "components/Hero/Hero";
import { MainSection } from "components/common/MainSection/MainSection";
import { About } from "components/About/About";
import { GallerySlider } from "components/Gallery/Gallery";
import { Services } from "components/Services/Services";
import { Contacts } from "components/Contacts/Contacts";

export const Home = () => {
  return (
    <>
      <Hero />
      <MainSection descr="our story" title="ABOUT US">
        <About />
      </MainSection>
      <MainSection descr="our works" title="PORTFOLIO">
        <GallerySlider />
      </MainSection>
      <MainSection descr="what do we do" title="SERVICES">
        <Services />
      </MainSection>
      <MainSection descr="where to find us" title="CONTACT US">
        <Contacts />
      </MainSection>
    </>
  );
};
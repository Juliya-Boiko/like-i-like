import { Hero } from "components/Hero/Hero";
import { MainSection } from "components/common/MainSection/MainSection";
import { About } from "components/About/About";

export const Home = () => {
  return (
    <>
      <Hero />
      <MainSection descr="our story" title="ABOUT US">
        <About />
      </MainSection>
      <MainSection descr="our works" title="PORTFOLIO">
        <div>gallery</div>
      </MainSection>
      <MainSection descr="what do we do" title="SERVICES">
        <div>prices</div>
      </MainSection>
      <MainSection descr="where to find us" title="CONTACT US">
        <div>map + form</div>
      </MainSection>
    </>
  );
};
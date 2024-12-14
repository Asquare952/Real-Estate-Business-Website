import Hero from "./AboutHero";
import OurValues from "./OurValues";
import Achievement from "./Achievement";
import Experience from "./Experience";
import TheTeam from "./TheTeam";
import ValuedClients from "./ValuedClients";
import CTA from "../../components/CTA";
const AboutPage = () => {
  return (
    <>
      <section className="container">
        <Hero/>
        <OurValues/>
        <Achievement/>
        <Experience/>
        <TheTeam/>
        <ValuedClients/>
        <CTA/>
      </section>
    </>
  );
};

export default AboutPage;

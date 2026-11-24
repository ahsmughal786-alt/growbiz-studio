import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechMarquee from "./components/TechMarquee.jsx";
import Industries from "./components/Industries.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Team from "./components/Team.jsx";
import Photography from "./components/Photography.jsx";
import Services from "./components/Services.jsx";
import AISection from "./components/AISection.jsx";
import Work from "./components/Work.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Process from "./components/Process.jsx";
import FAQ from "./components/FAQ.jsx";
import CTA from "./components/CTA.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import EmailButton from "./components/EmailButton.jsx";
import { useReveal } from "./components/ui.jsx";

export default function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <AISection />
        <Photography />
        <Work />
        <Testimonials />
        <Industries />
        <WhyUs />
        <Team />
        <Process />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <EmailButton />
    </>
  );
}

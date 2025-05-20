import Layout from "../../common/layout";
import HeroSection from "../../common/layout/Hero";
import TwoColumnAccordion from "../components/Accordion";
import RemoteAccessSection from "../components/RemoteAccessSection";
import TestimonialsSection from "../components/Testimonials";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <RemoteAccessSection />
      <TestimonialsSection/>
      <TwoColumnAccordion />
    </Layout>
  );
}

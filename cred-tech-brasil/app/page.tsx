import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      
      <Hero />
      <About />
      <Process />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}

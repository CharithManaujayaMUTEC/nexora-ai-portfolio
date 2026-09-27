import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Capabilities } from "@/components/Capabilities";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Work />
      <Capabilities />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
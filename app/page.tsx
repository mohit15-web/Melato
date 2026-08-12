import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import FlavourScroll from "@/components/FlavourScroll";
import About from "@/components/About";
import FeaturedPost from "@/components/FeaturedPost";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f7f1ea] min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <Menu />
      <FlavourScroll />
      <About />
      <FeaturedPost />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import Aboutme from "../sections/Aboutme";
import Portfolio from "../sections/Portfolio";
import Services from "../sections/Services";
import Blog from "../sections/Blog";
import Footer from "../components/Footer"
import TestBlog from "../sections/TestBlog";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Aboutme />
      <Portfolio />
      <Services/>
      <Blog />
      <TestBlog />
      <Footer />
    </>
  );
}
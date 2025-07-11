import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import { Testimonials } from "./sections/Testimonials";

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <Hero />
      {/* about */}
      <About />
      {/* projects */}
      <Projects />
      {/* experience */}
      <Experience />
      {/* testimonials */}
      {/* <Testimonials /> */}
      {/* contact */}
      <Contact/>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;

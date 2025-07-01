import About from "./sections/About";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <Hero/>
      {/* about */}
      <About/>
      {/* projects */}
      <Projects />
      {/* experience */}
      <section className="min-h-[70vh] sm:min-h-[40vh]"></section>
      <Experience />
      {/* testimonials */}
      {/* contact */}
      {/* footer */}
      <section className="min-h-screen"></section>
    </div>
  );
}

export default App;

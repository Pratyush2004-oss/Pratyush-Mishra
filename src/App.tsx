import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

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
      {/* experience */}
      {/* testimonials */}
      {/* contact */}
      {/* footer */}
      <section className="min-h-screen"></section>
    </div>
  );
}

export default App;

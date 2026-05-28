import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Activities from './components/Activities';
import Volunteer from './components/Volunteer';
import Donate from './components/Donate';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-orange-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Activities />
        <Volunteer />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import OrderNow from './components/OrderNow';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    // If combos is clicked, scrollTo can direct to the parent wrapper or the combo container in Menu
    const targetId = id === 'combos' ? 'combos' : id;
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 75; // sticky header height compensation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll spy to highlight current active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for detection line
      const sections = ['home', 'menu', 'combos', 'about', 'order', 'contact'];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] selection:bg-[#FF5C00] selection:text-white">
      
      {/* Dynamic Header Sticky Navbar */}
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Core Presentation Sections */}
      <main>
        {/* Home Section */}
        <Hero scrollToSection={scrollToSection} />

        {/* Menu & Featured Combo Sections */}
        <Menu scrollToSection={scrollToSection} />

        {/* About founders/kitchen section */}
        <About />

        {/* Ordering Section */}
        <OrderNow />

        {/* Contact radius validator and inquiry form */}
        <Contact />
      </main>

      {/* Bottom Footer block featuring students credit details */}
      <Footer scrollToSection={scrollToSection} />

    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Scroll Reveal Wrapper Component
const RevealSection = ({ children }: { children?: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: Stop observing once revealed
          // observer.unobserve(entry.target); 
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px" // Offset slightly so it triggers before bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return <div ref={ref} className="reveal">{children}</div>;
};

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        {/* Hero doesn't need reveal as it's the first thing seen */}
        <Hero />
        
        {/* About has its own internal staggered animation, so no wrapper needed */}
        <About />
        
        <RevealSection>
          <Services />
        </RevealSection>
        
        <RevealSection>
          <Portfolio />
        </RevealSection>
        
        <RevealSection>
          <Testimonials />
        </RevealSection>
        
        <RevealSection>
          <Process />
        </RevealSection>
        
        <RevealSection>
          <FAQ />
        </RevealSection>
        
        <RevealSection>
          <Contact />
        </RevealSection>
      </main>
      <Footer />
    </div>
  );
};

export default App;
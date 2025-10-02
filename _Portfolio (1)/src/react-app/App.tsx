import { useEffect } from 'react';
import '@/react-app/index.css';
import Navbar from '@/react-app/components/Navbar';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import Projects from '@/react-app/components/Projects';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export function App() {
  useEffect(() => {
    // Include required fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

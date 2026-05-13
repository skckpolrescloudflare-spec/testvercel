import Header from './components/Header';
import { motion } from 'motion/react';
import Hero from './components/Hero';
import ServiceStandards from './components/ServiceStandards';
import RequirementsSection from './components/RequirementsSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-app-bg overflow-x-hidden selection:bg-app-accent selection:text-black">
      <Header />
      <main>
        <Hero />
        <RequirementsSection />
        <ServiceStandards />
        <AboutSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Mobile FAB */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          href="https://play.google.com/store/apps/details?id=superapps.polri.presisi.presisi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-app-accent text-black rounded-full shadow-2xl shadow-app-accent/40"
        >
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black leading-none mb-1">DAFTAR</span>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <span className="text-[8px] font-bold leading-none mt-1">ONLINE</span>
          </div>
        </motion.a>
      </div>
    </div>
  );
}


import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, ExternalLink, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Informasi Layanan', href: '#about' },
    { name: 'Persyaratan', href: '#legal' },
    { name: 'Petugas', href: '#team' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0C10]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://static.wixstatic.com/media/a484ca_7ca9ec3d7c084880801eba3e410aab05~mv2.png/v1/fill/w_160,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a484ca_7ca9ec3d7c084880801eba3e410aab05~mv2.png" 
                  alt="Logo Sat Intelkam"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white font-sans tracking-tight">
                  POLRES TULUNGAGUNG
                </h1>
                <p className="text-[10px] font-bold tracking-[0.2em] text-app-accent uppercase">
                  SATINTELKAM DIGITAL
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://play.google.com/store/apps/details?id=superapps.polri.presisi.presisi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-app-accent text-black font-bold text-[11px] tracking-widest rounded-sm hover:bg-amber-400 transition-all uppercase"
              >
                DAFTAR ONLINE SEKARANG
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-400 hover:text-white z-[60]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-[#0A0C10] flex flex-col p-8 md:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16 border-b border-white/5 pb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://static.wixstatic.com/media/a484ca_7ca9ec3d7c084880801eba3e410aab05~mv2.png/v1/fill/w_160,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a484ca_7ca9ec3d7c084880801eba3e410aab05~mv2.png" 
                    alt="Logo Sat Intelkam"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-white font-bold tracking-tight uppercase text-xs leading-tight">
                  POLRES TULUNGAGUNG <br/>
                  <span className="text-app-accent">SAT INTELKAM</span>
                </h2>
              </div>
              <button 
                className="p-3 bg-white/5 rounded-full text-slate-400 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-8 mb-12">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className="text-3xl font-serif font-bold text-white hover:text-app-accent transition-colors italic tracking-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pt-8 border-t border-white/5"
            >
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
                <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-500 mb-4 text-center">Akses Layanan Digital</p>
                <a
                  href="https://play.google.com/store/apps/details?id=superapps.polri.presisi.presisi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-4 w-full py-5 bg-app-accent text-black font-black text-sm tracking-widest rounded-2xl shadow-lg shadow-app-accent/20 active:scale-[0.98] transition-transform"
                >
                  <Smartphone size={20} />
                  DAFTAR ONLINE
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

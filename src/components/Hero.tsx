import { motion } from 'motion/react';
import { ArrowRight, FileCheck, ShieldCheck, Globe, DollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-app-bg">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-app-accent/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-app-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Portal Pelayanan Publik Digital</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] mb-8 italic">
              Modernisasi <br/>
              <span className="not-italic text-app-accent">Pelayanan SKCK</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-light">
              Komitmen Polres Tulungagung dalam mewujudkan pelayanan yang Prediktif, Responsibilitas, dan Transparansi Berkeadilan untuk masyarakat.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="https://play.google.com/store/apps/details?id=superapps.polri.presisi.presisi"
                className="btn-primary flex items-center justify-center gap-2"
              >
                Daftar Online Sekarang
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-16 flex items-center gap-12 border-t border-white/5 pt-12">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tight">24/7</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-app-accent">Layanan Aduan</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tight">POLRES</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Tulungagung</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-app-accent/20 to-transparent blur-3xl rounded-full opacity-50"></div>
            <div className="relative z-10 glass-card rounded-2xl p-10 shadow-2xl">
              <div className="space-y-10">
                <section>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <FileCheck className="w-6 h-6 text-app-accent" />
                    Jadwal Pelayanan
                  </h3>
                  <div className="flex justify-between items-end py-4 border-b border-white/5">
                    <span className="text-slate-400 font-medium">Senin — Jum'at</span>
                    <div className="text-right">
                      <span className="text-2xl font-serif font-bold text-white tracking-tight">08:00 - 14:00</span>
                      <span className="ml-2 text-[10px] font-bold text-app-accent uppercase tracking-widest">WIB</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-app-accent" />
                    Biaya / Tarif PNBP
                  </h3>
                  <div className="flex justify-between items-end py-3 border-b border-white/5">
                    <span className="text-slate-400 font-medium">Sesuai PP No. 76 Th 2020</span>
                    <div className="text-right">
                      <span className="text-2xl font-serif font-bold text-white tracking-tight">Rp 30.000</span>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-10 p-5 bg-app-accent/10 border border-app-accent/20 rounded-lg">
                <p className="text-[11px] text-amber-200 leading-relaxed font-medium">
                  Pastikan seluruh dokumen persyaratan telah discan dengan jelas untuk pendaftaran online di Polri SuperApp. Pembayaran dilakukan via BRIVA/Virtual Account.
                </p>
              </div>
            </div>

            {/* Floating indicator */}
            <div className="absolute -top-6 -right-6 glass-card p-4 rounded-xl shadow-2xl z-20 hidden xl:block">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                </div>
                <div>
                   <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Sistem</p>
                   <p className="text-[11px] font-bold text-white">Online & Aman</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

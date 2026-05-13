import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-app-bg relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-serif font-bold text-white mb-8">Informasi & <br/><span className="text-app-accent italic">Layanan Aduan</span></h2>
            <p className="text-slate-400 mb-12 max-w-md font-light leading-relaxed">Kami berkomitmen untuk terus meningkatkan kualitas pelayanan. Sampaikan saran, pertanyaan, atau aduan Anda melalui saluran resmi kami (24 Jam Layanan Aduan).</p>

            <div className="space-y-6">
              <div className="group flex items-center gap-6 p-7 bg-white/5 rounded-2xl border border-white/5 hover:border-app-accent/20 transition-all">
                <div className="w-14 h-14 bg-app-card rounded-xl shadow-lg flex items-center justify-center text-app-accent group-hover:scale-110 transition-transform">
                   <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">WhatsApp Aduan</p>
                  <p className="text-lg font-bold text-white">0851-3304-1918</p>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-7 bg-white/5 rounded-2xl border border-white/5 hover:border-app-accent/20 transition-all">
                <div className="w-14 h-14 bg-app-card rounded-xl shadow-lg flex items-center justify-center text-app-accent group-hover:scale-110 transition-transform">
                   <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email Resmi</p>
                  <p className="text-lg font-bold text-white">tulungagungskck@gmail.com</p>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-7 bg-white/5 rounded-2xl border border-white/5 hover:border-app-accent/20 transition-all">
                <div className="w-14 h-14 bg-app-card rounded-xl shadow-lg flex items-center justify-center text-app-accent group-hover:scale-110 transition-transform">
                   <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Alamat Kantor</p>
                  <p className="text-sm font-bold text-white leading-tight font-serif">Jl. Ahmad Yani Timur No. 09, Tulungagung, Jawa Timur</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-app-accent/5 rotate-2 rounded-[2rem] -z-10 bg-gradient-to-br from-app-accent/20 to-transparent blur-2xl"></div>
            <div className="bg-[#161B22] rounded-2xl p-10 shadow-3xl border border-white/10 h-full">
              <h3 className="text-2xl font-serif font-bold text-white mb-10 flex items-center gap-3">
                <Send className="w-5 h-5 text-app-accent" />
                Kirim Pesan
              </h3>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center p-12 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                  <p className="text-xl font-bold text-white mb-2">Success!</p>
                  <p className="text-slate-400">Message received. Terima kasih atas masukan Anda.</p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Nama Lengkap</label>
                    <input required type="text" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-app-accent/20 focus:border-app-accent outline-none transition-all placeholder:text-slate-600 text-white" placeholder="Masukkan nama Anda..." />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email / No. WhatsApp</label>
                    <input required type="text" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-app-accent/20 focus:border-app-accent outline-none transition-all placeholder:text-slate-600 text-white" placeholder="kontak@anda.com" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Pesan / Aduan</label>
                    <textarea required rows={4} className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-app-accent/20 focus:border-app-accent outline-none transition-all placeholder:text-slate-600 text-white resize-none" placeholder="Tuliskan pesan Anda di sini..."></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center gap-3 mt-4">
                    Kirim Pesan Sekarang
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

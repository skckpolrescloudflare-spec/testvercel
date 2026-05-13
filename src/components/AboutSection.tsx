import { motion } from 'motion/react';
import { BookOpen, Scale, Landmark, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const steps = [
    {
      title: "Apa itu SKCK?",
      desc: "Surat Keterangan Catatan Kepolisian (dahulu SKKB) adalah surat resmi yang diterbitkan oleh Polri yang berisikan catatan kejahatan seseorang.",
      icon: ShieldCheck
    },
    {
      title: "Masa Berlaku",
      desc: "SKCK memiliki masa berlaku selama 6 (enam) bulan sejak tanggal diterbitkan. Pastikan mengajukan perpanjangan sebelum habis masa berlakunya.",
      icon: CheckCircle2
    }
  ];

  const laws = [
    "UU No. 25 Tahun 2009 tentang Pelayanan Publik",
    "Peraturan Kepala Kepolisian Negara RI No. 18 Tahun 2014 tentang Tata Cara Penerbitan SKCK",
    "PP No. 76 Tahun 2020 tentang Jenis dan Tarif PNBP pada Polri",
    "Permenpan RB No. 15 Tahun 2014 tentang Pedoman Standar Pelayanan",
    "Permenpan RB No. 16 Tahun 2014 tentang Pedoman Survey Kepuasan Masyarakat",
    "Permenpan RB No. 52 Tahun 2014 tentang Pembangunan Zona Integritas",
    "Perpol No. 6 Tahun 2023 tentang Penerbitan SKCK"
  ];

  return (
    <section id="about" className="py-24 bg-app-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-10 leading-tight">
            Tentang Kami & <br/><span className="text-app-accent italic">Pelayanan SKCK</span>
          </h2>
          <div className="h-1 w-20 bg-app-accent mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-10 bg-white/5 border border-white/10 rounded-3xl group hover:border-app-accent/30 transition-all shadow-2xl shadow-black/40"
          >
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-app-accent/50 transition-all">
              <ShieldCheck className="w-10 h-10 text-app-accent" />
            </div>
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold text-white mb-6 tracking-wide italic leading-none">Visi Pelayanan</h3>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                "Mewujudkan pelayanan SKCK yang bersih, transparan, akuntabel, dan humanis guna meningkatkan kepercayaan masyarakat terhadap institusi Polri, khususnya di wilayah hukum Polres Tulungagung."
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-app-card border border-white/5 rounded-2xl flex flex-col items-center text-center hover:border-app-accent/40 transition-all group"
              >
                <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-app-accent group-hover:text-black transition-all">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

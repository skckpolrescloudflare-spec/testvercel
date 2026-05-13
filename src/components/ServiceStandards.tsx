import { motion } from 'motion/react';
import { ClipboardList, Clock, DollarSign, UserCheck, ShieldQuestion, FileText } from 'lucide-react';

export default function ServiceStandards() {
  const standards = [
    {
      title: "Persyaratan",
      desc: "Fotocopy KTP, KK, Akta Lahir, Pas Foto 4x6 (6 lembar) background merah, dan Rumus Sidik Jari.",
      icon: ClipboardList
    },
    {
      title: "Prosedur",
      desc: "Pemohon mendaftar online via SuperApp, verifikasi berkas di loket, pengambilan sidik jari, dan penerbitan.",
      icon: UserCheck
    },
    {
      title: "Waktu Pelayanan",
      desc: "Proses penerbitan memerlukan waktu kurang lebih 15-30 menit setelah berkas dinyatakan lengkap.",
      icon: Clock
    },
    {
      title: "Biaya / Tarif",
      desc: "Rp 30.000,- (Tiga Puluh Ribu Rupiah) sesuai PP No. 76 Tahun 2020.",
      icon: DollarSign
    },
    {
      title: "Produk Pelayanan",
      desc: "Surat Keterangan Catatan Kepolisian (SKCK) dengan validitas catatan kriminalitas yang sah.",
      icon: FileText
    },
    {
      title: "Pengaduan",
      desc: "Melalui WhatsApp 0851-3304-1918 atau email tulungagungskck@gmail.com jika terdapat ketidaksesuaian.",
      icon: ShieldQuestion
    }
  ];

  return (
    <section id="standards" className="py-24 bg-[#0F1218]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 italic">Standar Pelayanan <span className="not-italic text-app-accent">SKCK</span></h2>
          <div className="h-1 w-20 bg-app-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-8 bg-app-card border border-white/5 rounded-2xl hover:border-app-accent/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-app-accent group-hover:text-black transition-all">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

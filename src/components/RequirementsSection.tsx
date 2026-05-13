import { motion } from 'motion/react';
import { Smartphone, UserPen, FileText, CheckCircle2 } from 'lucide-react';

export default function RequirementsSection() {
  const requirementGroups = [
    {
      title: "SKCK ONLINE",
      icon: Smartphone,
      color: "text-amber-500",
      items: [
        "Daftar melalui aplikasi Polri Presisi;",
        "Upload foto KK, KTP, BPJS/KIS, Akte Kelahiran/Ijazah, Pas foto latar merah terbaru;",
        "Pilih hari dan lokasi pengambilan;",
        "Bayar PNBP via BRIVA Rp 30.000,-;",
        "Tunjukkan bukti pendaftaran ke loket SKCK sesuai pilihan."
      ]
    },
    {
      title: "SKCK MANUAL",
      icon: UserPen,
      color: "text-slate-300",
      items: [
        "Fotocopy KK, KTP, BPJS, Akte Kelahiran/Ijazah, Pas foto latar merah 4x6 5 lembar;",
        "Mengisi Formulir Daftar Pertanyaan dan Tik;",
        "Membayar PNBP Rp 30.000,-"
      ]
    },
    {
      title: "REKOMENDASI SKCK",
      icon: FileText,
      color: "text-blue-400",
      items: [
        "Fotocopy KK, KTP, BPJS, Akte Kelahiran/Ijazah, Paspor, Pas foto latar merah 4x6 5 lembar;",
        "Pengantar dari Desa mengetahui Kecamatan dan Polsek;",
        "Surat izin keluarga mengetahui kepala desa;",
        "Rekom/pengantar dari Disnaker/PT;",
        "Mengisi Formulir Daftar Pertanyaan dan Tik."
      ]
    }
  ];

  return (
    <section id="legal" className="py-24 bg-[#0A0C10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mb-6">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Syarat & Ketentuan Penerbitan</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-4 italic">
            Persyaratan <span className="not-italic text-app-accent">SKCK Baru</span>
          </h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">Sesuai Perpol No. 06 / 2023 Psl. 4</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {requirementGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#161B22] border border-white/10 rounded-2xl p-8 flex flex-col h-full hover:border-app-accent/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 bg-white/5 rounded-xl ${group.color} group-hover:scale-110 transition-transform`}>
                  <group.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold tracking-tight ${group.color}`}>{group.title}</h3>
              </div>

              <ul className="space-y-5 flex-1">
                {group.items.map((item, i) => (
                  <li key={i} className="flex gap-4 group/item">
                    <div className="mt-1.5 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-app-accent/20 group-hover/item:text-app-accent transition-colors" />
                    </div>
                    <span className="text-sm text-slate-400 group-hover/item:text-slate-200 transition-colors leading-relaxed font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

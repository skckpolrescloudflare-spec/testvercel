import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function TeamSection() {
  const team = [
    {
      name: "DENI FEBRI KRISDIONO, S.E.",
      role: "Pendaftaran / Screening",
      img: "https://images.unsplash.com/photo-1556157382-97dee2dcb96a?auto=format&fit=crop&q=80&w=300&h=300",
      accent: "bg-app-accent"
    },
    {
      name: "FIERDHIAN FRANANDA PUTRI",
      role: "Operator / CS",
      img: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?auto=format&fit=crop&q=80&w=300&h=300",
      accent: "bg-slate-400"
    },
    {
      name: "AGNES WILAMENA",
      role: "Operator",
      img: "https://images.unsplash.com/photo-1594161474278-f753e8783451?auto=format&fit=crop&q=80&w=300&h=300",
      accent: "bg-white"
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#0A0C10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-5xl font-serif font-bold text-white mb-6 tracking-tight">Petugas Pelayanan</h2>
          <p className="text-slate-500 font-light leading-relaxed">Personel Satintelkam Polres Tulungagung yang siap melayani kebutuhan administrasi SKCK Anda dengan mengedepankan Integritas dan Transparansi.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card rounded-2xl p-1 border-white/5 hover:border-app-accent/30 transition-all duration-500 overflow-hidden"
            >
              <div className="p-10 pb-6 flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className={`absolute inset-0 rounded-full scale-125 blur-2xl opacity-10 ${member.accent}`}></div>
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover relative z-10 border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute -bottom-2 -right-2 p-2 bg-app-card rounded-lg border border-white/10 z-20 shadow-xl">
                     <ShieldCheck className="w-4 h-4 text-app-accent" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-app-accent transition-colors">{member.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">{member.role}</p>
                
                <div className="w-12 h-0.5 bg-white/5 group-hover:w-20 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

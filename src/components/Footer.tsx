import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0F1218] text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-16 mb-16 border-b border-white/5">
          <div className="max-w-xs">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://static.wixstatic.com/media/a484ca_7ca9ec3d7c084880801eba3e410aab05~mv2.png/v1/fill/w_160,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a484ca_7ca9ec3d7c084880801eba3e410aab05~mv2.png" 
                  alt="Logo Sat Intelkam"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">POLRES TULUNGAGUNG</h2>
                <p className="text-[10px] font-bold text-app-accent uppercase tracking-widest">Satintelkam Digital</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              Mewujudkan pelayanan prima kepolisian yang transparan dan akuntabel berbasis teknologi informasi untuk masyarakat Tulungagung.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 flex-1 justify-end">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Tautan Cepat</h4>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Beranda</a>
                <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">Informasi</a>
                <a href="#team" className="text-sm text-slate-400 hover:text-white transition-colors">Petugas</a>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">External</h4>
              <nav className="flex flex-col gap-3">
                <a href="https://www.lapor.go.id" target="_blank" className="text-sm text-slate-400 hover:text-white transition-colors">LAPOR!!</a>
                <a href="https://www.polri.go.id" target="_blank" className="text-sm text-slate-400 hover:text-white transition-colors">POLRI RI</a>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Polda Jatim</a>
              </nav>
            </div>
            
            <div className="col-span-2 sm:col-auto flex items-center gap-6 mt-4 sm:mt-0">
              <img src="https://static.wixstatic.com/media/a484ca_e3df4bdb6a4846619ee738048dc54e8f~mv2_d_1600_1471_s_2.png/v1/fill/w_300,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a484ca_e3df4bdb6a4846619ee738048dc54e8f~mv2_d_1600_1471_s_2.png" alt="Logo 1" className="h-14 w-auto object-contain transition-opacity" />
              <img src="https://static.wixstatic.com/media/a484ca_2424874efd4d4ebfaf01839bbf56c937~mv2_d_1600_1200_s_2.png/v1/fill/w_346,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a484ca_2424874efd4d4ebfaf01839bbf56c937~mv2_d_1600_1200_s_2.png" alt="Logo 2" className="h-10 w-auto object-contain transition-opacity" />
              <img src="https://static.wixstatic.com/media/a484ca_48a40d82d19048f39f08537cd5c3b601~mv2_d_1600_1200_s_2.png/v1/crop/x_296,y_0,w_1007,h_1200/fill/w_192,h_238,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a484ca_48a40d82d19048f39f08537cd5c3b601~mv2_d_1600_1200_s_2.png" alt="Logo 3" className="h-12 w-auto object-contain transition-opacity" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-slate-600">
            &copy; {currentYear} Kepolisian Resor Tulungagung. Built with Integrity.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-bold text-slate-700 uppercase tracking-[0.3em]">
            <span>Transparency</span>
            <span>Accountability</span>
            <span>Professionalism</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

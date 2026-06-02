import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center justify-center">
                <img 
                  src="/LOGO_01.png" 
                  alt="陪伴兒童成長關懷協會 LOGO" 
                  className="h-24 sm:h-28 w-auto object-contain scale-[1.3] pb-0.5 sm:scale-[1.4] transform origin-center"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="font-bold text-xl sm:text-2xl text-white tracking-tight">
                社團法人中華陪童長大兒少關懷協會
              </span>
            </div>
            <div className="flex space-x-4">
               <a 
                 href="https://www.facebook.com/p/陪童長大兒少關懷協會-61575631187535/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
               >
                  <Facebook className="w-5 h-5" />
               </a>
               <a 
                 href="https://www.instagram.com/twgrow2025/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
               >
                  <Instagram className="w-5 h-5" />
               </a>
               <a 
                 href="https://www.youtube.com/@陪童長大" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
               >
                  <Youtube className="w-5 h-5" />
               </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">快速連結</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">關於本協會</a></li>
              <li><a href="#media" className="hover:text-orange-400 transition-colors">大小心聲</a></li>
              <li><a href="#volunteer" className="hover:text-orange-400 transition-colors">志工招募</a></li>
              <li><a href="#donate" className="hover:text-orange-400 transition-colors">支持我們</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6">聯絡資訊</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neutral-500 mt-0.5 shrink-0" />
                <span>高雄市鳳山區家和八街30號</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neutral-500 shrink-0" />
                <span>0958-745732</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neutral-500 shrink-0" />
                <a 
                  href="mailto:twgrow2025@twgrow.org.tw" 
                  className="hover:text-orange-400 transition-colors hover:underline underline-offset-4"
                >
                  twgrow2025@twgrow.org.tw
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6">本會資訊</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-neutral-500 text-xs">立案字號</span>
                <span className="text-neutral-200">台內團字第1140027909號</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-neutral-500 text-xs">統編</span>
                <span className="text-neutral-200 font-mono tracking-wider">61111003</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-neutral-500 text-xs">勸募字號許可文號</span>
                <span className="text-neutral-200">衛部救字第1151361110號</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <div className="bg-orange-500/10 border border-orange-500/20 text-orange-400 px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="text-xs">愛心碼</span>
                  <span className="font-bold text-lg font-mono">6165</span>
                </div>
                <span className="text-neutral-400 text-xs">(有你有我)</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-neutral-500">
          <p>© {currentYear} 社團法人中華陪童長大兒少關懷協會. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

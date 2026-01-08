import React from 'react';
import { MessageCircle, ChevronRight } from 'lucide-react';

export const FloatingLineBanner: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-0 left-0 md:left-auto md:right-8 z-[60] px-6 pointer-events-none">
      <div className="max-w-max mx-auto md:mx-0 pointer-events-auto">
        <a 
          href="https://line.me/R/ti/p/@example" // 実際のLINE友だち追加リンクに置き換え
          target="_blank"
          rel="noopener noreferrer"
          className="line-gradient flex items-center space-x-3 py-2.5 px-5 rounded-full shadow-2xl border border-white/30 hover:scale-105 active:scale-95 transition-all duration-300 group ring-4 ring-[#06C755]/10"
        >
          <div className="bg-white p-1.5 rounded-full shadow-sm">
            <MessageCircle className="h-5 w-5 text-[#06C755] fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[10px] font-bold opacity-90 leading-none mb-0.5">
              LINEで無料相談
            </span>
            <span className="text-white text-sm font-black leading-none tracking-tight">
              友だち追加
            </span>
          </div>
          <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/40 transition-colors">
            <ChevronRight className="h-3 w-3 text-white" />
          </div>
        </a>
      </div>
    </div>
  );
};
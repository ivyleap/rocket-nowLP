import React from 'react';
import { Button } from './Button';
import { ChevronRight, TrendingUp, Clock, Smartphone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920" 
          alt="Delicious food delivery background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-orange-400 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium">【限定】新規加盟店 手数料0円キャンペーン実施中</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
            デリバリーで売上を<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">最大化</span>しませんか？
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            初期費用・固定費0円。リスクなしで始められる地域密着型デリバリー。
            <br className="hidden md:block" />
            最短3日であなたの料理が街の人気メニューに。
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="text-lg px-8 py-4 shadow-orange-500/25 shadow-xl" 
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              無料資料ダウンロード <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <a 
              href="https://line.me/R/ti/p/@example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#06C755] text-white bg-[#06C755]/10 hover:bg-[#06C755] rounded-full font-bold text-lg transition-all"
            >
              LINEで資料をもらう
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center">
              <TrendingUp className="h-8 w-8 text-orange-500 mb-2" />
              <p className="text-3xl font-bold">平均 120%</p>
              <p className="text-sm text-gray-400 font-medium">導入後の売上向上率</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-orange-500 mb-2" />
              <p className="text-3xl font-bold">最短 3日</p>
              <p className="text-sm text-gray-400 font-medium">即戦力としてスタート</p>
            </div>
            <div className="flex flex-col items-center">
              <Smartphone className="h-8 w-8 text-orange-500 mb-2" />
              <p className="text-3xl font-bold">0円</p>
              <p className="text-sm text-gray-400 font-medium">初期導入・月額固定費</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
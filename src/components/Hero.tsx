import React from 'react';
import { Button } from './Button';
import { ChevronRight, TrendingUp, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#0a0a0c]">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-orange-600/20 blur-[150px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-red-600/10 blur-[120px] rounded-full"></div>
                <img
                    src="/rocket-nowLP/images/hero_bg.png"
                    alt="Delicious food delivery background"
                    className="w-full h-full object-cover opacity-20 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/90 via-[#0a0a0c]/60 to-[#0a0a0c]"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">

                <div className="inline-flex items-center px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-10 backdrop-blur-xl mx-auto">
                    <span className="flex h-3 w-3 rounded-full bg-orange-500 mr-3 animate-ping"></span>
                    <span className="text-base font-bold tracking-wider">加盟店手数料キャンペーン実施中！</span>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight mb-10 leading-[1.1]">
                    その一皿を、<br />
                    最速の<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">感動</span>に。
                </h1>

                <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
                    初期費用・固定費0円。地域に愛されるお店の味を、AIが導く爆速配送でお届け。
                    最短5日で、デリバリーをあなたの最高の武器に。
                </p>

                <div className="flex flex-wrap gap-6 mb-16 justify-center">
                    <Button
                        className="text-xl px-12 py-6 bg-orange-600 hover:bg-orange-500 shadow-[0_0_40px_rgba(234,88,12,0.4)] transition-all hover:scale-105"
                        onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        無料資料をダウンロード <ChevronRight className="ml-2 h-7 w-7" />
                    </Button>
                    <a
                        href="https://lin.ee/DDOVOyZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-5 bg-[#06C755] hover:bg-[#05b64d] text-white rounded-full font-bold text-xl shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:scale-105"
                    >
                        {/* LINE Icon SVG */}
                        <svg className="w-7 h-7 mr-3 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.35,5A8.34,8.34,0,0,0,12,1.35C5.46,1.4,1.4,6.4,1.4,11.83a9,9,0,0,0,3.56,7.66c.21.16.32.48.37.95a12.79,12.79,0,0,1-.13,1.64c0,.06-.06.13-.13.19s-.07.06-.09.06-.06,0-.07,0a1.88,1.88,0,0,1-.52-.39L2.83,20.6a5.77,5.77,0,0,1,3.48-1.55l.23,0h0a15.07,15.07,0,0,0,6.07,1.21h.1a8.42,8.42,0,0,0,7.66-8.42A8.42,8.42,0,0,0,20.35,5ZM18.25,12.7a.38.38,0,0,1-.38.38H15.65a.39.39,0,0,1,0-.77h2.23A.38.38,0,0,1,18.25,12.7Zm-1.54-3.61a.38.38,0,0,1-.38.38H14.1a.39.39,0,0,1,0-.77h2.23A.38.38,0,0,1,16.71,9.09Zm2.22-1.8H14.1a.39.39,0,0,1,0-.77h4.83a.39.39,0,0,1,0,.77Z" />
                        </svg>
                        LINEで資料をもらう
                    </a>
                </div>

                <div className="flex items-center justify-center space-x-12 text-white/50">
                    <div className="flex items-center space-x-3">
                        <TrendingUp className="h-6 w-6 text-orange-500" />
                        <span className="text-base font-semibold tracking-wide uppercase">売上 +120%UP</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Clock className="h-6 w-6 text-orange-500" />
                        <span className="text-base font-semibold tracking-wide uppercase">最短5日導入</span>
                    </div>
                </div>

            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
                <span className="text-white text-[10px] uppercase tracking-[0.3em]">scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent"></div>
            </div>
        </section>
    );
};

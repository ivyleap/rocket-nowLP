import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Play, MousePointerClick, ArrowRight } from 'lucide-react';

export const VideoSection: React.FC = () => {
  // ユーザー指定のYouTube動画ID
  const videoId = "63pgr9NR7K8"; 

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/20 blur-[120px] rounded-full z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          <SectionTitle 
            title="3分でわかるロケットナウ" 
            subtitle="Introduction Video"
          />
          
          <div className="w-full max-w-5xl mt-4 relative group">
            {/* Video Player Container */}
            <div className="relative pt-[56.25%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(251,146,60,0.2)] border-4 md:border-8 border-white bg-white transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(251,146,60,0.3)] group-hover:-translate-y-2">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`}
                title="Rocket Now Official Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Play Indicator Tooltip (Mobile hidden) */}
            <div className="hidden md:flex absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-2 rounded-full items-center space-x-2 shadow-xl animate-bounce">
              <MousePointerClick className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-bold uppercase tracking-wider">Click to Play</span>
            </div>
          </div>
          
          <div className="mt-16 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-2xl group-hover:rotate-6 transition-transform">
                  <Play className="h-6 w-6 text-white fill-current" />
                </div>
                <h4 className="font-bold text-xl text-gray-900">配送オペレーション</h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                地域最速を支える独自の配送網と、丁寧な商品取り扱いの様子を詳しく紹介しています。
              </p>
              <div className="flex items-center text-orange-600 font-bold text-sm">
                動画内 01:20〜 <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-2xl group-hover:rotate-6 transition-transform">
                  <Play className="h-6 w-6 text-white fill-current" />
                </div>
                <h4 className="font-bold text-xl text-gray-900">加盟店様のメリット</h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                導入によって売上がどのように変化するのか、具体的な成功事例を交えて解説します。
              </p>
              <div className="flex items-center text-orange-600 font-bold text-sm">
                動画内 02:45〜 <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
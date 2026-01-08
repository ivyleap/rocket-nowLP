import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Play, ArrowRight } from 'lucide-react';

export const VideoSection: React.FC = () => {
  // ユーザー指定のYouTube動画ID
  const videoId = "NRIFPqWj9J0";

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/20 blur-[120px] rounded-full z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          <SectionTitle
            title="加盟店様の成功事例"
            subtitle="Success Stories"
          />

          <div className="w-full max-w-5xl mt-4 relative group">
            {/* Video Player Container */}
            <div className="relative pt-[56.25%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(251,146,60,0.2)] border-4 md:border-8 border-white bg-white transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(251,146,60,0.3)] group-hover:-translate-y-2">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?si=LWH43LNLerxVnNri&rel=0&modestbranding=1&autoplay=0`}
                title="Rocket Now Official Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Play Indicator Tooltip Removed */}
          </div>

          <div className="mt-8">
            <a
              href="https://youtu.be/NRIFPqWj9J0?si=LWH43LNLerxVnNri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              YouTubeで動画を見る
            </a>
          </div>

          <div className="mt-16 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-500 p-3 rounded-2xl group-hover:rotate-6 transition-transform">
                  <Play className="h-6 w-6 text-white fill-current" />
                </div>
                <h4 className="font-bold text-xl text-gray-900">売上26%UPの秘密</h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                「お店と同価格」バッジが適用された店舗では、全体の平均売上が26%増加。ユーザーに選ばれる理由がここにあります。
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
                <h4 className="font-bold text-xl text-gray-900">注文数が伸びる理由</h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                ユーザーは「送料0円・サービス料0円」。他社よりも圧倒的に頼みやすい仕組みが、リピーターを生み出し続けます。
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
import React from 'react';
import { SectionTitle } from './SectionTitle';
import { ShieldCheck, Zap, BarChart, MapPin } from 'lucide-react';

export const WhyRocketNow: React.FC = () => {
  const strengths = [
    {
      title: "地域密着の爆速配送網",
      description: "半径3km以内の専属ライダーが待機。平均20分の「爆速配送」で、料理のクオリティをそのまま食卓へ。",
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      image: "/rocket-nowLP/images/strength_speed.png"
    },
    {
      title: "送料・サービス料まですべて0円",
      description: "ユーザーは常に送料無料。店舗様は初期費用・固定費0円。双方が使いやすいプラットフォームだから、注文が止まりません。",
      icon: <BarChart className="h-6 w-6 text-orange-500" />,
      image: "/rocket-nowLP/images/strength_cost.png"
    },
    {
      title: "「お店と同価格」で売上最大化",
      description: "実店舗と同じ価格で提供することで、顧客満足度が向上。平均売上26%UPの実績が証明する、勝てるデリバリー戦略です。",
      icon: <BarChart className="h-6 w-6 text-orange-500" />,
      image: "/rocket-nowLP/images/strength_revenue.png"
    }
  ];

  return (
    <section id="why-rocket" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="なぜ、ロケットナウなのか？"
          subtitle="Our Strength"
        />

        <div className="mt-16 space-y-24">
          {strengths.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-2xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {item.description}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-800 font-medium">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <span>専属ライダーによる高品質な接客</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-800 font-medium">
                    <MapPin className="h-5 w-5 text-green-500" />
                    <span>特定エリアでの圧倒的なシェア</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Promise Banner */}
        <div className="mt-24 bg-gray-900 rounded-[3rem] p-8 md:p-16 text-center">
          <h3 className="text-2xl md:text-4xl font-black text-white mb-6">
            「お店の味を、そのまま食卓へ」
          </h3>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            ロケットナウは単なる配送代行ではありません。お店のブランド価値を高め、共に成長していくパートナーです。
            最高水準の配送品質と、データに基づいた経営支援をお約束します。
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
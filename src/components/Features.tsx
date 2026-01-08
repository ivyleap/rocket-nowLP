import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Zap, Wallet, Users, BarChart3, Bike, Headphones } from 'lucide-react';
import type { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "圧倒的な配送スピード",
    description: "独自のAI配送システムにより、注文から平均20分でお客様の元へ。できたての美味しさを損ないません。",
    icon: <Zap className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "初期費用・固定費ゼロ",
    description: "導入にかかる費用は0円。売上が発生した分だけの手数料なので、リスクなく始められます。",
    icon: <Wallet className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "新規顧客の開拓",
    description: "店舗に来られないお客様にもリーチ。Rocket Nowのアプリユーザー数100万人への露出で認知度UP。",
    icon: <Users className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "かんたん管理画面",
    description: "タブレット一つで完結。直感的なUIで、忙しいランチタイムでもストレスなく操作できます。",
    icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "プロの配送パートナー",
    description: "接客研修を受けた専属ライダーがお届け。ブランドイメージを大切に運びます。",
    icon: <Bike className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "365日サポート",
    description: "トラブル時は専用サポートデスクが即時対応。お店は調理に集中していただけます。",
    icon: <Headphones className="h-8 w-8 text-orange-600" />,
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Rocket Nowが選ばれる理由"
          subtitle="Features"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
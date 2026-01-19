import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "舩木",
    role: "オーナー",
    shopName: "Chinese Dining 「ｆ」",
    content: "タブレットの操作が非常に簡単で、忙しい時間帯でもアルバイトスタッフがスムーズに対応できています。配達員の方のマナーが良く、安心してお客様に商品を届けられます。",
    image: "/rocket-nowLP/images/logo_f.jpg"
  },
  {
    name: "店主",
    role: "",
    shopName: "麺屋ダイコク",
    content: "初期費用0円というのが導入の決め手でした。固定費がかからないため、リスクなく始められて、今ではデリバリーの注文も増えてきています。",
    image: "/rocket-nowLP/images/testimonial_kenichi.png"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-orange-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="加盟店様の声"
          subtitle="Voice"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{item.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-white shadow-sm"
                />
                <div>
                  <p className="font-bold text-gray-900">{item.shopName}</p>
                  <p className="text-sm text-gray-500">{item.name} {item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
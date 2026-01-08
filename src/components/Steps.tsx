import React from 'react';
import { SectionTitle } from './SectionTitle';

const steps = [
  {
    num: "01",
    title: "Webからお申し込み",
    description: "フォームより必要事項を入力してください。所要時間は約3分です。"
  },
  {
    num: "02",
    title: "審査・ご契約",
    description: "営業許可証などを確認させていただきます。オンラインで契約手続きが完了します。"
  },
  {
    num: "03",
    title: "メニュー登録",
    description: "専用の管理画面からメニューを登録。簡単に設定できる直感的なUIをご用意しています。"
  },
  {
    num: "04",
    title: "販売スタート",
    description: "タブレットを受け取ったらすぐに開始できます。ロケットスタートを切りましょう！"
  }
];

export const Steps: React.FC = () => {
  return (
    <section id="flow" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="導入までの4ステップ" 
          subtitle="Flow"
        />
        <div className="mt-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-800 md:bg-transparent p-6 rounded-xl md:p-0 border border-gray-700 md:border-none">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-2xl font-bold shadow-lg mb-6 border-4 border-gray-900">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
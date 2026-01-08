import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "導入にあたって必要な機器はありますか？",
    answer: "インターネットに接続できる環境があれば、基本的に弊社から貸与するタブレット1台で完結します。プリンターなどの周辺機器もオプションでご用意しております。"
  },
  {
    question: "解約金や契約期間の縛りはありますか？",
    answer: "いいえ、ございません。Rocket Nowはお店のリスクを最小限にするため、契約期間の縛りや解約違約金は設けておりません。いつでも安心して始めていただけます。"
  },
  {
    question: "配達エリアはどこまでですか？",
    answer: "店舗から半径約3〜4km圏内を基本としています。AIが最適なルートと配達員をマッチングするため、商品の品質を保ったままお届けできる範囲に設定しています。"
  },
  {
    question: "売上の入金サイクルを教えてください。",
    answer: "月2回（15日締め当月末払い、末日締め翌月15日払い）となります。キャッシュフローを圧迫しないサイクルを採用しております。"
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="よくあるご質問"
          subtitle="FAQ"
        />

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-gray-900">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-orange-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 py-5 opacity-100 border-t border-gray-100' : 'max-h-0 py-0 opacity-0'
                  }`}
              >
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
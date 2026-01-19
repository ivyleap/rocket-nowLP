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
    question: "配達対象エリアはどこですか？",
    answer: (
      <div className="space-y-3">
        <p><strong>【東京都（23区）】</strong><br />千代田区、中央区、港区、新宿区、文京区、台東区、墨田区、江東区、品川区、目黒区、大田区、世田谷区、渋谷区、中野区、杉並区、豊島区、北区、荒川区、板橋区、練馬区、足立区、葛飾区、江戸川区</p>
        <p><strong>【東京都（23区外）】</strong><br />八王子市、立川市、武蔵野市、三鷹市、府中市、昭島市、調布市、町田市、小金井市、小平市、日野市、東村山市、国分寺市、国立市、狛江市、東大和市、清瀬市、東久留米市、武蔵村山市、多摩市、稲城市、西東京市</p>
        <p><strong>【埼玉県】</strong><br />さいたま市、川越市、川口市、所沢市、春日部市、狭山市、上尾市、草加市、越谷市、蕨市、戸田市、入間市、朝霞市、志木市、和光市、新座市、八潮市、富士見市、三郷市、ふじみ野市、入間郡</p>
        <p><strong>【千葉県】</strong><br />千葉市、市川市、船橋市、松戸市、佐倉市、習志野市、柏市、市原市、流山市、八千代市、浦安市、四街道市</p>
        <p><strong>【神奈川県】</strong><br />横浜市、川崎市、相模原市、横須賀市、平塚市、鎌倉市、藤沢市、茅ヶ崎市、逗子市、厚木市、大和市、海老名市、座間市、綾瀬市、三浦郡、高座郡</p>
        <p><strong>【愛知県】</strong> 名古屋市</p>
        <p><strong>【大阪府】</strong> 大阪市、堺市、東大阪市</p>
        <p><strong>【京都府】</strong> 京都市</p>
        <p><strong>【兵庫県】</strong> 神戸市、尼崎市、西宮市、芦屋市</p>
        <p><strong>【宮城県】</strong> 仙台市</p>
        <p><strong>【広島県】</strong> 広島市</p>
        <p><strong>【福岡県】</strong> 福岡市</p>
        <p><strong>【静岡県】</strong> 静岡市、浜松市</p>
        <p><strong>【北海道】</strong> 札幌市</p>
      </div>
    )
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
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[2000px] py-5 opacity-100 border-t border-gray-100' : 'max-h-0 py-0 opacity-0'
                  }`}
              >
                <div className="text-gray-600 leading-relaxed">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
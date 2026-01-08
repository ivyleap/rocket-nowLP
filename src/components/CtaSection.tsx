import React from 'react';
import { Button } from './Button';
import { Rocket } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-14 text-white flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <Rocket className="h-10 w-10 text-white" />
                <span className="ml-3 text-2xl font-bold">Rocket Now</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                まずは無料で<br/>資料請求から。
              </h2>
              <p className="text-orange-100 mb-8 text-lg">
                あなたの街の新しいファンを見つけに行きませんか？
                導入に関する疑問や不安も、お気軽にご相談ください。
              </p>
              <ul className="space-y-3 text-orange-50 font-medium">
                <li className="flex items-center">✓ 最短1分で申し込み完了</li>
                <li className="flex items-center">✓ 無理な勧誘は一切ありません</li>
                <li className="flex items-center">✓ 担当者から24時間以内にご連絡</li>
              </ul>
            </div>

            <div className="bg-white p-10 md:p-14">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">店舗名</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" placeholder="例: ロケット食堂" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" placeholder="例: 山田 太郎" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">電話番号</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" placeholder="090-1234-5678" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none" placeholder="info@example.com" />
                </div>
                <div className="pt-4">
                  <Button fullWidth className="text-lg shadow-lg">
                    無料で資料を請求する
                  </Button>
                </div>
                <p className="text-xs text-center text-gray-500 mt-4">
                  送信ボタンを押すことで、利用規約とプライバシーポリシーに同意したものとみなします。
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
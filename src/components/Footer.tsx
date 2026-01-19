import React from 'react';
import { Rocket, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Rocket className="h-6 w-6 text-orange-500" />
              <span className="ml-2 text-xl font-bold">Rocket Now</span>
            </div>
            <p className="text-gray-400 text-sm">
              食の未来を、今すぐここに。<br />
              地域No.1の配送スピードで<br />
              あなたのビジネスを加速させます。
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-200">サービス</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">加盟店募集</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">配達パートナー募集</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">ユーザー向けアプリ</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">対応エリア</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-200">会社情報</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">会社概要</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">ニュース</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">採用情報</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">お問い合わせ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-200">SNS</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Rocket Now Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="https://customer-web.rocketnow.co.jp/versioned-doc/MERCHANT_WEB_PRIVACY" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="https://customer-web.rocketnow.co.jp/versioned-doc/MERCHANT_WEB_TNC" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">利用規約</a>
            <a href="https://www.rocketnow.co.jp/tokusho/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
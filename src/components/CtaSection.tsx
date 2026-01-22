import React, { useState } from 'react';
import { Button } from './Button';
import { Rocket, CheckCircle } from 'lucide-react';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbzDXx1tiubv_Ls1txVuN6bW5uZTD-tcsNxv3Goua6zT48AxFlGZwasy10jyJvnNrCcJBA/exec';

export const CtaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    storeName: '',
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await fetch(GAS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // no-corsモードではレスポンスが読めないため、送信したら成功とみなす
      setIsSubmitted(true);

    } catch (err) {
      console.error('送信エラー:', err);
      setError('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                まずは無料で<br />資料請求から。
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
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">送信完了</h3>
                  <p className="text-gray-600">
                    お問い合わせありがとうございます。<br />
                    24時間以内に担当者よりご連絡いたします。
                  </p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">店舗名</label>
                    <input
                      type="text"
                      name="storeName"
                      value={formData.storeName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                      placeholder="例: ロケット食堂"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                      placeholder="例: 山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">電話番号</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                      placeholder="090-1234-5678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                      placeholder="info@example.com"
                    />
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}
                  <div className="pt-4">
                    <Button type="submit" fullWidth className="text-lg shadow-lg" disabled={isSubmitting}>
                      {isSubmitting ? '送信中...' : '無料で資料を請求する'}
                    </Button>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    送信ボタンを押すことで、利用規約とプライバシーポリシーに同意したものとみなします。
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

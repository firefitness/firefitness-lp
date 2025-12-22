"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    store: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理（実装時に追加）
    alert("お問い合わせありがとうございます。担当者より折り返しご連絡いたします。");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            無料カウンセリング予約
          </h2>
          <p className="text-gray-600">
            まずはお気軽にご相談ください。
            <br />
            あなたの悩みに合わせた最適なプランをご提案します。
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="space-y-6">
            {/* お名前 */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-secondary mb-2"
              >
                お名前 <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary mb-2"
              >
                メールアドレス <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="example@email.com"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-secondary mb-2"
              >
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="090-1234-5678"
              />
            </div>

            {/* 希望店舗 */}
            <div>
              <label
                htmlFor="store"
                className="block text-sm font-medium text-secondary mb-2"
              >
                ご希望の店舗 <span className="text-primary">*</span>
              </label>
              <select
                id="store"
                name="store"
                required
                value={formData.store}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              >
                <option value="">選択してください</option>
                <option value="shimada">島田本町店</option>
                <option value="ifuku">伊福町店</option>
              </select>
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-secondary mb-2"
              >
                ご相談内容・ご質問
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                placeholder="お悩みやご質問がございましたらお気軽にご記入ください"
              />
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              無料カウンセリングを予約する
            </button>

            <p className="text-center text-gray-500 text-sm">
              ※ご入力いただいた情報は、お問い合わせへの対応にのみ使用いたします。
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

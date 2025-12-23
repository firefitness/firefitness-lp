import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* コンテンツリンク */}
          <div>
            <h4 className="text-lg font-bold mb-5 relative pb-3">
              コンテンツ
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors">
                  ホーム
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-primary transition-colors">
                  特徴
                </a>
              </li>
              <li>
                <a href="#flow" className="text-gray-300 hover:text-primary transition-colors">
                  体験の流れ
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-primary transition-colors">
                  料金プラン
                </a>
              </li>
              <li>
                <a href="#trainers" className="text-gray-300 hover:text-primary transition-colors">
                  トレーナー
                </a>
              </li>
              <li>
                <a href="#locations" className="text-gray-300 hover:text-primary transition-colors">
                  店舗情報
                </a>
              </li>
            </ul>
          </div>

          {/* サポートリンク */}
          <div>
            <h4 className="text-lg font-bold mb-5 relative pb-3">
              サポート
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className="text-gray-300 hover:text-primary transition-colors">
                  よくある質問
                </a>
              </li>
              <li>
                <a href="#booking-widget" className="text-gray-300 hover:text-primary transition-colors">
                  お問い合わせ
                </a>
              </li>
              <li>
                <Link href="https://www.firefitness-okayama.com/privacypolicy/" className="text-gray-300 hover:text-primary transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="https://www.firefitness-okayama.com/termsofservice/" className="text-gray-300 hover:text-primary transition-colors">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="https://www.firefitness-okayama.com/specified-commercial-transaction-law/" className="text-gray-300 hover:text-primary transition-colors">
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ情報 */}
          <div>
            <h4 className="text-lg font-bold mb-5 relative pb-3">
              お問い合わせ
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-primary"></span>
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>島田本町店: 〒700-0033</li>
              <li>岡山県岡山市北区島田本町1-1-47</li>
              <li>テクノ技研ビル2F</li>
              <li className="pt-2">伊福町店: 〒700-0013</li>
              <li>岡山県岡山市北区伊福町3-25-18</li>
              <li className="pt-2">TEL: 070-8977-5851</li>
              <li>Email: firefitness.okayama@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 FIREFITNESS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

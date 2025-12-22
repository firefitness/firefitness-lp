import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* 会社情報 */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-primary">FIRE</span>
              <span className="text-2xl font-bold">FITNESS</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              完全予約制パーソナルトレーニングジム
            </p>
            <p className="text-gray-300 text-sm">
              30〜50代のビジネスパーソン、健康意識の高い方のための
              <br />
              オーダーメイドトレーニングを提供しています。
            </p>
          </div>

          {/* 店舗情報 */}
          <div>
            <h3 className="text-lg font-bold mb-4">店舗情報</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-primary">島田本町店</p>
                <p className="text-gray-300 text-sm">
                  〒700-0000 岡山市北区島田本町
                </p>
              </div>
              <div>
                <p className="font-medium text-primary">伊福町店</p>
                <p className="text-gray-300 text-sm">
                  〒700-0000 岡山市北区伊福町
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <nav className="flex gap-6 text-sm text-gray-400">
              <Link href="/desk-work" className="hover:text-primary transition-colors">
                デスクワーカー向け
              </Link>
              <Link href="/postnatal" className="hover:text-primary transition-colors">
                産後ダイエット
              </Link>
              <Link href="/over40" className="hover:text-primary transition-colors">
                40代向け
              </Link>
            </nav>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} FIREFITNESS All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

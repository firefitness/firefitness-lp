import CTAButton from "./CTAButton";

interface Store {
  name: string;
  address: string;
  access: string;
  mapUrl?: string;
}

interface AccessSectionProps {
  stores?: Store[];
}

const defaultStores: Store[] = [
  {
    name: "島田本町店",
    address: "〒700-0000 岡山市北区島田本町",
    access: "JR岡山駅から車で10分",
  },
  {
    name: "伊福町店",
    address: "〒700-0000 岡山市北区伊福町",
    access: "JR岡山駅から車で8分",
  },
];

export default function AccessSection({ stores = defaultStores }: AccessSectionProps) {
  return (
    <section id="access" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
          店舗アクセス
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {stores.map((store, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-primary mb-4">
                FIREFITNESS {store.name}
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{store.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                  <span className="text-gray-700">{store.access}</span>
                </div>
              </div>

              {/* Google Map プレースホルダー */}
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-500">Google Map</p>
              </div>
            </div>
          ))}
        </div>

        {/* 営業情報 */}
        <div className="bg-secondary text-white rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">ご予約・お問い合わせ</h3>
          <p className="text-gray-300 mb-2">完全予約制</p>
          <p className="text-2xl font-bold text-primary mb-4">
            <a href="tel:086-000-0000" className="hover:underline">
              086-000-0000
            </a>
          </p>
          <p className="text-gray-400 text-sm mb-6">
            営業時間: 9:00〜22:00（最終受付 21:00）
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

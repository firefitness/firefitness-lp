import Image from "next/image";

const locations = [
  {
    name: "FIREFITNESS 島田本町店",
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/03/LP画像9.png",
    address: {
      zip: "〒700-0033",
      line1: "岡山県岡山市北区島田本町1-1-47",
      line2: "テクノ技研ビル2F",
    },
    phone: "070-8977-5851",
    hours: "営業時間: 全日 8:00〜24:00",
    parking: "専用駐車場あり",
  },
  {
    name: "FIREFITNESS 伊福町店",
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/03/LP画像10.png",
    address: {
      zip: "〒700-0013",
      line1: "岡山県岡山市北区伊福町3-25-18",
      line2: "TAXビル3F",
    },
    phone: "070-8977-5851",
    hours: "営業時間: 全日 8:00〜24:00",
    parking: "専用駐車場あり",
  },
];

export default function MainLocations() {
  return (
    <section id="locations" className="py-20 bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          店舗情報
        </h2>
        <p className="text-center text-gray-300 mb-12">
          アクセス便利な2つの店舗で、<br />
          お客様のニーズに合わせたサービスを<br />
          提供しています。
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* 画像 */}
              <div className="relative h-56">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* 詳細 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {location.name}
                </h3>

                <div className="space-y-4">
                  {/* 住所 */}
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary flex-shrink-0 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p>{location.address.zip}</p>
                      <p>{location.address.line1}</p>
                      <p>{location.address.line2}</p>
                    </div>
                  </div>

                  {/* 電話 */}
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a
                      href={`tel:${location.phone}`}
                      className="hover:text-primary transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* 営業時間 */}
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>{location.hours}</p>
                  </div>

                  {/* 駐車場 */}
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                    <p>{location.parking}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

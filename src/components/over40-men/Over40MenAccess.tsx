import Image from "next/image";
import { HiLocationMarker, HiPhone, HiMail, HiClock } from "react-icons/hi";
import { MdLocalParking } from "react-icons/md";

const stores = [
  {
    name: "島田本町店",
    address: "〒700-0033 岡山県岡山市北区島田本町1-1-47 テクノ技研ビル2F",
    parking: "あり",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
  },
  {
    name: "伊福町店",
    address: "〒700-0013 岡山県岡山市北区伊福町3-25-18",
    parking: "あり",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

export default function Over40MenAccess() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-male-accent text-sm font-medium mb-2">ACCESS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            店舗アクセス
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {stores.map((store, index) => (
            <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={store.image}
                  alt={`FIREFITNESS ${store.name}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-80">FIREFITNESS</p>
                  <p className="text-xl font-bold">{store.name}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <HiLocationMarker className="w-5 h-5 text-male-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{store.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MdLocalParking className="w-5 h-5 text-male-accent flex-shrink-0" />
                    <span className="text-gray-300 text-sm">
                      駐車場: {store.parking}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 店舗情報 */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h3 className="text-xl font-bold text-white text-center mb-6">
            FIREFITNESS
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <HiPhone className="w-8 h-8 text-male-accent mb-2" />
              <p className="text-sm text-gray-400 mb-1">電話</p>
              <a
                href="tel:070-8977-5851"
                className="font-bold text-white hover:text-male-accent transition-colors"
              >
                070-8977-5851
              </a>
            </div>
            <div className="flex flex-col items-center">
              <HiMail className="w-8 h-8 text-male-accent mb-2" />
              <p className="text-sm text-gray-400 mb-1">メール</p>
              <a
                href="mailto:firefitness.okayama@gmail.com"
                className="font-bold text-white hover:text-male-accent transition-colors text-sm"
              >
                firefitness.okayama@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <HiClock className="w-8 h-8 text-male-accent mb-2" />
              <p className="text-sm text-gray-400 mb-1">営業時間</p>
              <p className="font-bold text-white">
                7:00〜22:00
                <br />
                <span className="text-sm font-normal text-gray-400">
                  （完全予約制）
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

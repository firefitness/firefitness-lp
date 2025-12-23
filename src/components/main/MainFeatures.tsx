import Image from "next/image";

const features = [
  {
    number: 1,
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/03/LP画像1-1.png",
    title: "完全個室のプライベート空間",
    description: (
      <>
        <strong>人目を気にせず集中</strong>できる完全個室で、<br />
        <span className="text-primary">マンツーマン指導</span>を受けられます。<br />
        初めての方でも安心して取り組めます。
      </>
    ),
  },
  {
    number: 2,
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/03/LP画像2-2-e1743277656311.png",
    title: "続けやすい価格設定",
    description: (
      <>
        <span className="text-primary">継続率9割</span>の理由は良心的な価格設定。<br />
        <strong>パーソナルトレーニング1回あたりの価格は、<br />
        他社様の半額以下の6,500円と<br />
        業界最安クラス</strong>になります。
      </>
    ),
  },
  {
    number: 3,
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/03/LP画像3.png",
    title: "アクセス便利な駅近スタジオ",
    description: (
      <>
        <strong>駅から徒歩5分</strong>の好立地。<br />
        <span className="text-primary">忙しい方でも通いやすい環境</span>で、<br />
        継続的なトレーニングを実現します。
      </>
    ),
  },
  {
    number: 4,
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/03/LP画像4.png",
    title: "食事指導と生活習慣のアドバイス",
    description: (
      <>
        トレーニングだけでなく、<br />
        <span className="text-primary">日常生活での食事や生活習慣</span>についても<br />
        <strong>専門的なアドバイス</strong>を提供します。
      </>
    ),
  },
];

export default function MainFeatures() {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          選ばれる理由
        </h2>
        <p className="text-center text-gray-300 mb-12">
          FIREFITNESSが多くの方に<br />選ばれている理由をご紹介します。
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="bg-white/5 rounded-xl p-8 text-center relative hover:shadow-xl transition-shadow min-h-[500px]"
            >
              {/* 番号バッジ */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                {feature.number}
              </div>

              {/* 画像 */}
              <div className="relative h-44 mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* アイコン */}
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FeatureIcon number={feature.number} />
              </div>

              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ number }: { number: number }) {
  const icons: Record<number, JSX.Element> = {
    1: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
      </svg>
    ),
    2: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
      </svg>
    ),
    3: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    4: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M6 3a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 01-1 1H8a1 1 0 110-2h4a1 1 0 011 1zm-3 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
    ),
  };
  return icons[number] || null;
}

import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";

const qualifications = [
  "NSCA-CPT",
  "保健体育教員免許",
  "健康運動指導士",
];

export default function MetaboTrainer() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
          なぜ「精密3軸診断」にこだわるのか
        </h2>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* 写真エリア */}
            <div className="relative min-h-[300px] md:min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                alt="トレーナー"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">
                代表トレーナー
              </div>
            </div>

            {/* テキストエリア */}
            <div className="p-8">
              <p className="text-primary font-medium mb-2">代表トレーナー</p>
              <h3 className="text-2xl font-bold text-secondary mb-6">
                FIREFITNESSの想い
              </h3>

              <div className="bg-light rounded-lg p-6 mb-6 border-l-4 border-primary">
                <p className="text-gray-700 leading-relaxed">
                  「頑張っているのに変わらない」
                  <br />
                  <br />
                  そんな声をたくさん聞いてきました。
                  <br />
                  <br />
                  でも、それは努力が足りないのではなく、
                  <strong className="text-secondary">
                    自分の体を正しく理解していなかった
                  </strong>
                  だけ。
                  <br />
                  <br />
                  だから私たちは、トレーニングの前に
                  <span className="text-primary font-bold">
                    「なぜ今の体になったのか」
                  </span>
                  を一緒に考えます。
                </p>
              </div>

              <p className="text-lg font-bold text-secondary mb-4">
                「頑張れ」とは言いません。
                <br />
                「なぜ」を一緒に考えます。
              </p>

              {/* 資格 */}
              <div className="flex flex-wrap gap-2">
                {qualifications.map((qual, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 bg-navy/10 text-navy px-3 py-1 rounded-full text-sm"
                  >
                    <HiCheckCircle className="w-4 h-4 text-primary" />
                    {qual}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

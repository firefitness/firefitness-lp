export default function MainWorries() {
  const worries = [
    { text: "料金が高くて", highlight: "続けられなそう" },
    { text: "トレーナーと", highlight: "良好な関係が築けるか不安" },
    { text: "結果が出ても", highlight: "リバウンドしそう" },
    { text: "", highlight: "初心者でも通えるのか不安" },
    { text: "", highlight: "食事制限が厳しそう" },
  ];

  return (
    <section className="py-20 bg-secondary text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          よくあるお悩み
        </h2>
        <p className="text-center text-gray-300 mb-12">
          多くの方が抱えている課題を解決します
        </p>

        <div className="space-y-6">
          {/* メインの悩み */}
          <div className="bg-white/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">こんなお悩みありませんか？</h3>
            <p className="text-xl md:text-2xl font-bold text-primary mb-2">
              「本気で痩せたい！」
            </p>
            <p className="text-xl md:text-2xl font-bold text-primary">
              「そろそろ運動しないとマズい！」
            </p>
          </div>

          {/* サブの悩み */}
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <p className="text-xl font-semibold">
              でもパーソナルジムは初めてで不安...
            </p>
          </div>

          {/* チェックリスト */}
          <div className="bg-white/10 rounded-xl p-8">
            <ul className="space-y-4">
              {worries.map((worry, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">
                    {worry.text && <span>{worry.text}</span>}
                    <span className="text-primary font-semibold">
                      {worry.highlight}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 解決 */}
          <div className="bg-white/10 border-2 border-primary rounded-xl p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              こんなお悩み全て解決!!
            </h3>
            <p className="text-lg">
              <strong>
                FIREFITNESS(ファイヤーフィットネス)は
                初心者も安心のパーソナルジム！
              </strong>
            </p>
          </div>

          {/* 矢印 */}
          <div className="flex justify-center">
            <div
              className="w-0 h-0"
              style={{
                borderLeft: "30px solid transparent",
                borderRight: "30px solid transparent",
                borderTop: "30px solid #ff6b35",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

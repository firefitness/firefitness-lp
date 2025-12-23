const testimonials = [
  {
    name: "Ｔ・Ｍ様(女性)",
    title: "42歳・会社員",
    text: "運動経験がなく不安でしたが、丁寧に指導してくださり、半年で-8kgの減量に成功しました。プライベート空間なので人目を気にせず集中できるのが良い点でした。",
  },
  {
    name: "Ｋ・Ｓ様(男性)",
    title: "55歳・医療従事者",
    text: "仕事終わりにも通いやすい立地と予約制なのが決め手でした。3ヶ月で筋肉が増え、体脂肪率が7%減り、体型が変わったと周囲から言われるようになりました。",
  },
  {
    name: "Ｙ・Ｏ様(女性)",
    title: "37歳・美容師",
    text: "肩こりと腰痛の改善が目的でしたが、姿勢が良くなり見た目も若々しくなったと喜んでいます！トレーナーさんが親身に相談してくれるので、続けられました！",
  },
];

export default function MainTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-4">
          お客様の声
        </h2>
        <p className="text-center text-gray-600 mb-12">
          FIREFITNESSで実際に変化を実感された<br />お客様の声をご紹介します。
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* ヘッダー */}
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-secondary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>

              {/* テキスト */}
              <div className="pl-4 border-l-4 border-primary">
                <p className="text-gray-600 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              {/* 星評価 */}
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

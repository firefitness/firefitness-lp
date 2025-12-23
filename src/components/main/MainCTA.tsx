import Link from "next/link";

export default function MainCTA() {
  return (
    <section
      className="py-24 text-white text-center"
      style={{
        background: `linear-gradient(rgba(13, 43, 69, 0.9), rgba(13, 43, 69, 0.9)), url('https://www.firefitness-okayama.com/wp-content/uploads/2023/10/motivation-bg.jpg') no-repeat center/cover`,
      }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          今こそ、<br />
          理想の自分への<br />
          第一歩を
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          年齢とともに体型が変わるのは当たり前？<br />
          いえ、正しい方法でケアすれば、<br />
          誰でも変化は可能です。<br />
          FIREFITNESSの<br />
          完全個室パーソナルトレーニングで、<br />
          新しい自分を見つけましょう。
        </p>
        <Link
          href="https://firefitness.hacomono.jp/reserve?trial=true&from=home"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          体験セッションを予約する
        </Link>
      </div>
    </section>
  );
}

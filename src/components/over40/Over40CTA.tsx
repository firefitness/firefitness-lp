import { RiLineLine } from "react-icons/ri";
import { HiCalendar, HiPhone } from "react-icons/hi";

export default function Over40CTA() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          40代の今だから、始める価値がある。
          <br />
          まずは無料カウンセリングへ。
        </h2>
        <p className="text-gray-300 mb-10">
          強引な勧誘は一切ありません。40代の体について、一緒に考えましょう。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://lin.ee/xxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-line text-white font-bold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1"
          >
            <RiLineLine className="w-6 h-6" />
            <span>LINEで無料相談</span>
          </a>
          <a
            href="https://firefitness.hacomono.jp/reserve?trial=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <HiCalendar className="w-6 h-6" />
            <span>体験を予約する</span>
          </a>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-gray-400 text-sm mb-2">電話でのお問い合わせ</p>
          <a
            href="tel:070-8977-5851"
            className="inline-flex items-center gap-2 text-2xl font-bold text-white hover:text-primary transition-colors"
          >
            <HiPhone className="w-6 h-6" />
            070-8977-5851
          </a>
          <p className="text-gray-400 text-sm mt-2">営業時間: 7:00〜22:00</p>
        </div>
      </div>
    </section>
  );
}

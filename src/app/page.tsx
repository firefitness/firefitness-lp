import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lpPages = [
  {
    href: "/desk-work",
    title: "デスクワーカー向け",
    description: "肩こり・腰痛・猫背・運動不足でお悩みの方へ",
    status: "公開中",
  },
  {
    href: "/postnatal",
    title: "産後ダイエット",
    description: "産後の体型戻しでお悩みの方へ",
    status: "準備中",
  },
  {
    href: "/over40",
    title: "40代向け",
    description: "40代からの健康づくりを始めたい方へ",
    status: "準備中",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                <span className="text-primary">FIRE</span>FITNESS
                <br />
                悩み別LPサイト
              </h1>
              <p className="text-gray-600">
                岡山のパーソナルトレーニングジム FIREFITNESSの
                <br />
                悩み別ランディングページ一覧
              </p>
            </div>

            <div className="grid gap-6">
              {lpPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className={`block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border-l-4 ${
                    page.status === "公開中"
                      ? "border-primary"
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold text-secondary mb-2">
                        {page.title}
                      </h2>
                      <p className="text-gray-600">{page.description}</p>
                    </div>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        page.status === "公開中"
                          ? "bg-primary/10 text-primary"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {page.status}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

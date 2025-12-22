"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Car, ShieldCheck, Sparkles } from "lucide-react";

const stores = [
  {
    name: "島田本町店",
    address: "〒700-0033 岡山県岡山市北区島田本町1-1-47 テクノ技研ビル2F",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
  },
  {
    name: "伊福町店",
    address: "〒700-0013 岡山県岡山市北区伊福町3-25-18",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

export default function SwitchAccess() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-amber-50/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-stone-100/50 to-transparent rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 relative">
        {/* セクションタイトル */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-amber-600 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Access
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-stone-800 mb-3 sm:mb-4 tracking-tight">
            店舗情報
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* 店舗カード */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {stores.map((store, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* カード背景グロー */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-stone-100/30 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-100 shadow-lg shadow-stone-100 hover:shadow-xl transition-all duration-500">
                <div className="relative h-44 sm:h-56">
                  <Image
                    src={store.image}
                    alt={`FIREFITNESS ${store.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-amber-100/10" />
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                    <p className="text-xs sm:text-sm opacity-80 font-light tracking-wide">FIREFITNESS</p>
                    <p className="text-xl sm:text-2xl font-bold">{store.name}</p>
                  </div>

                  {/* 装飾ライン */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                      </div>
                      <span className="text-stone-600 text-xs sm:text-sm pt-1 sm:pt-2">{store.address}</span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Car className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                      </div>
                      <span className="text-stone-600 text-xs sm:text-sm">駐車場あり</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 店舗特徴 */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { icon: ShieldCheck, text: "完全個室" },
            { icon: Car, text: "駐車場完備" },
            { icon: Sparkles, text: "清潔な空間" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-50 to-stone-50 px-3 sm:px-5 py-2 sm:py-3 rounded-full border border-amber-200/30 shadow-sm"
            >
              <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
              <span className="text-xs sm:text-sm text-stone-600 font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* 連絡先 */}
        <div
          className={`relative transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* 背景グロー */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 to-stone-100/40 rounded-2xl sm:rounded-3xl blur-xl" />

          <div className="relative bg-gradient-to-br from-white to-stone-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-stone-100 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-800 text-center mb-6 sm:mb-8">
              FIREFITNESS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="group flex flex-col items-center">
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-md shadow-amber-100/50 group-hover:shadow-lg transition-shadow duration-300">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <p className="text-xs sm:text-sm text-stone-500 mb-1 sm:mb-2">電話</p>
                <a
                  href="tel:070-8977-5851"
                  className="font-bold text-stone-800 hover:text-amber-600 transition-colors text-base sm:text-lg"
                >
                  070-8977-5851
                </a>
              </div>
              <div className="group flex flex-col items-center">
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-md shadow-amber-100/50 group-hover:shadow-lg transition-shadow duration-300">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <p className="text-xs sm:text-sm text-stone-500 mb-1 sm:mb-2">メール</p>
                <a
                  href="mailto:firefitness.okayama@gmail.com"
                  className="font-bold text-stone-800 hover:text-amber-600 transition-colors text-xs sm:text-sm break-all"
                >
                  firefitness.okayama@gmail.com
                </a>
              </div>
              <div className="group flex flex-col items-center">
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-md shadow-amber-100/50 group-hover:shadow-lg transition-shadow duration-300">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <p className="text-xs sm:text-sm text-stone-500 mb-1 sm:mb-2">営業時間</p>
                <p className="font-bold text-stone-800 text-base sm:text-lg">
                  7:00〜22:00
                </p>
                <span className="text-xs sm:text-sm font-normal text-stone-500">
                  （完全予約制）
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

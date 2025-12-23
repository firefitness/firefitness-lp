"use client";

export default function MainBookingWidget() {
  return (
    <section id="booking-widget" className="py-12 bg-white flex justify-center">
      <iframe
        id="hacomono-widget-w0001"
        src="https://firefitness.hacomono.jp/widgets/1?isFilterableByCategory=true&isShowStudioInfo=true"
        className="w-full max-w-4xl h-[600px] border-0"
        title="予約ウィジェット"
      />
    </section>
  );
}

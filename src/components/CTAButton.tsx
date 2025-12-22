interface CTAButtonProps {
  text?: string;
  subText?: string;
  href?: string;
  size?: "normal" | "large";
}

export default function CTAButton({
  text = "無料カウンセリングを予約する",
  subText = "今すぐ体の悩みを相談",
  href = "#contact",
  size = "normal",
}: CTAButtonProps) {
  const sizeClasses =
    size === "large"
      ? "px-8 py-5 text-lg"
      : "px-6 py-4 text-base";

  return (
    <a
      href={href}
      className={`
        inline-block bg-primary hover:bg-primary-dark text-white font-bold
        rounded-full shadow-lg hover:shadow-xl transition-all duration-300
        transform hover:-translate-y-1 text-center
        ${sizeClasses}
      `}
    >
      <span className="block">{text}</span>
      {subText && (
        <span className="block text-sm font-normal mt-1 opacity-90">
          {subText}
        </span>
      )}
    </a>
  );
}

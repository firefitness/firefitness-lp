interface Problem {
  icon: string;
  text: string;
}

interface ProblemSectionProps {
  title?: string;
  problems: Problem[];
}

export default function ProblemSection({
  title = "こんなお悩みありませんか？",
  problems,
}: ProblemSectionProps) {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
          {title}
        </h2>

        <div className="grid gap-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <span className="text-3xl flex-shrink-0">{problem.icon}</span>
              <p className="text-secondary text-lg">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl md:text-2xl font-bold text-secondary">
            その悩み、
            <span className="text-primary">FIREFITNESS</span>
            が解決します！
          </p>
        </div>
      </div>
    </section>
  );
}

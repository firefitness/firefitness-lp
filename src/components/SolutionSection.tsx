interface Solution {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface SolutionSectionProps {
  title?: string;
  subtitle?: string;
  solutions: Solution[];
}

export default function SolutionSection({
  title = "FIREFITNESSが選ばれる理由",
  subtitle = "デスクワークによる体の不調を根本から改善",
  solutions,
}: SolutionSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">{subtitle}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

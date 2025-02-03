import { Bot, BarChart, CirclePause } from "lucide-react";

const features = [
  {
    icon: CirclePause,
    title: "Stop Win / Stop Loss",
    description: "Configure metas de vitórias e derrotas.",
  },
  {
    icon: Bot,
    title: "Automação",
    description: "Realize apostas de forma automática.",
  },
  {
    icon: BarChart,
    title: "Gale",
    description: "Configure suas prórpas estratégias de gale.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold tracking-tighter text-center mb-12">
          Funcionalidades
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700"
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

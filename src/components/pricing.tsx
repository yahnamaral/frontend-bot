import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Plano mensal",
    price: "R$ 90,00",
    description: "Plano recorrente mensal",
    features: [
      "Sala de sinais Double",
      "Sala de sinais Crash",
      "Apostas automáticas",
    ],
  },
  {
    name: "Plano trimestral",
    price: "R$ 75,00",
    description: "R$ 225,00 a cada três meses",
    features: [
      "Sala de sinais Double",
      "Sala de sinais Crash",
      "Apostas automáticas",
    ],
  },
  {
    name: "Plano anual",
    price: "R$ 50,00",
    description: "R$ 600,00 reais por ano",
    features: [
      "Sala de sinais Double",
      "Sala de sinais Crash",
      "Apostas automáticas",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Preços
        </h2>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`flex flex-col justify-between ${
                index === 1 ? "border-primary shadow-lg" : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.name !== "Enterprise" && (
                    <span className="text-gray-500">/mês</span>
                  )}
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={index === 1 ? "default" : "outline"}
                >
                  Comprar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

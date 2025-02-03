import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcos Guilherme",
    role: "",
    content:
      "Melhor robo de apostas já feito! Consigo configurar minhas próprias estratégias.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Maria Eduarda",
    role: "",
    content:
      "Melhor robo de apostas já feito! Consigo configurar minhas próprias estratégias.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "João Vitor",
    role: "",
    content:
      "Melhor robo de apostas já feito! Consigo configurar minhas próprias estratégias.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Ana Júlia",
    role: "",
    content:
      "Melhor robo de apostas já feito! Consigo configurar minhas próprias estratégias.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function Testimonial() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Depoimentos de nossos usuários
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground italic text-sm">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

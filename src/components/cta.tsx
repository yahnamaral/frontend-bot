import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Pronto para operar no automático?
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
              Junte-se a milhares de clientes satisfeitos e leve sua
              produtividade para o próximo nível.
            </p>
          </div>
          <Button className="text-base font-bold">Começar agora</Button>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Suas operações</span>
              <span className="block text-primary">100% automáticas</span>
            </h1>
            <p className="text-base text-gray-500 sm:text-lg md:text-xl max-w-3xl">
              Economize seu tempo, configurando seu robo de apostas 100%
              automático.
            </p>
            <div className="sm:flex sm:justify-start">
              <div className="rounded-md shadow">
                <Link
                  href="/get-started"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <Image
              src="/blaze.png?height=1000&width=1000"
              alt="Hero image"
              width={600}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

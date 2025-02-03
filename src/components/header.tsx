import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden text-primary font-bold sm:inline-block">
              MyBot
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#features">Funcionalidades</Link>
            <Link href="#testimonials">Depoimentos</Link>
            <Link href="#pricing">Preço</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button variant="ghost" className="text-base font-bold">
            Log in
          </Button>
          <Button className="text-base font-bold">Cadastro</Button>
        </div>
      </div>
    </header>
  );
}

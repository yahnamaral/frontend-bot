import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Produto</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features">Funcionalidades</Link>
              </li>
              <li>
                <Link href="#pricing">Preços</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">MyBot</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">Sobre Nós</Link>
              </li>
              <li>
                <Link href="#">Contato</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">Suporte</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">Política de Privacidade</Link>
              </li>
              <li>
                <Link href="#">Termos de Serviço</Link>
              </li>
              <li>
                <Link href="#">Política de Cookie</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 MyBot. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

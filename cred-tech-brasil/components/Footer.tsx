import React from "react";
import Link from "next/link";
import {
  Clock,
  Instagram,
  Locate,
  Mail,
  MapPlus,
  Navigation,
  Phone,
} from "lucide-react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-6 py-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-semibold mb-3 text-xl flex items-center gap-2">
              <Clock />
              Precisa de Ajuda?
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
  Se você tiver qualquer dúvida, sugestão, dificuldade técnica ou precisa de orientação sobre nossos serviços, não hesite em entrar em contato com a nossa equipe de suporte. Estamos sempre prontos para oferecer o melhor atendimento possível.  
  <br /><br />
  Aceitamos diversas formas de pagamento, incluindo boleto bancário, cartão de crédito e Pix — tudo para garantir praticidade, segurança e flexibilidade na sua contratação.
</p>

            <p className="mt-3 text-sm text-gray-600 italic">
              Estamos aqui para ajudar!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold mb-3 text-xl flex items-center gap-2">
              <MapPlus />
              Localização e Contato
            </h3>
            <p className="flex items-center gap-2">
              <Locate />
              Atendimento Online
              <br />
              Brasil
            </p>
            <p className="mt-2 flex items-center gap-2">
              <Phone />
              Telefone: (11) 952703236
            </p>
            <p className="mt-2 flex items-center text-sm gap-2">
              <Mail />
              credtechbrasilacessoria@gmail.com
            </p>
            <a href="https://www.instagram.com/assessoriacredtechbrasil/">
              <p className="mt-2 flex items-center flex-row text-sm gap-2 text-blue-500">
                <Instagram />
                assessoriacredtechbrasil
              </p>
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-xl flex items-center gap-2 ">
              <Navigation />
              Navegação
            </h3>
            <ul className="text-blue-500 flex flex-col gap-3">
              <li>
                <Link href="#" className="hover:underline">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:underline">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-300 py-4 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Cred Tech Brasil. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

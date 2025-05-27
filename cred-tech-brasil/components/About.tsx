import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <section className="px-6 py-20 bg-[#FEB044]" id="sobre">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 ">
          <h2 className="text-4xl font-bold mb-6">Sobre Nós</h2>
          <p className="text-gray-700 mb-4">
            Somos uma empresa dedicada a restaurar a saúde financeira dos nossos
            clientes, oferecendo soluções personalizadas e eficazes para limpar
            seu nome e garantir tranquilidade financeira.
          </p>
          <p className="text-gray-700">
            Nossa equipe é composta por especialistas experientes que acompanham
            cada etapa do processo, garantindo transparência, agilidade e
            resultados reais para você.
          </p>
        </div>

        <div className="md:w-1/2 relative w-full h-64 md:h-96">
          <Image
            src="/about-img.jpg"
            alt="Imagem sobre nós"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

"use client";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img-hero.jpg"
          alt="Imagem do Banner"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Gradientes de overlay */}
        <div className="absolute inset-0 md:bg-gradient-to-r from-blue-900 via-transparent to-blue-900 bg-blue-900/60" />
        <div className="absolute inset-0 md:bg-gradient-to-l from-blue-900 via-transparent to-blue-900" />
      </div>

      {/* Conteúdo */}
      <div className="h-[90vh] flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 pt-42 md:pt-0">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-xl mb-6">
            Soluções rápidas para seu{" "}
            <span className="relative text-blue-300">
              CPF ou CNPJ
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 w-full h-1 bg-blue-400 rounded"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </h1>

          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
            Volte a ter seu nome limpo
          </h3>
          <p className="text-white/90 text-lg mb-6">Conquiste sua liberdade de volta!</p>

          <ul className="space-y-2 mb-6 list-disc list-inside">
            {[
              "Está negativado?",
              "Não consegue crédito?",
              "Precisa regularizar seu nome?",
            ].map((text, idx) => (
              <li key={idx}>
                {text}
              </li>
            ))}
          </ul>

          {/* Destaque */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-medium mb-8">
            <CircleCheck className="w-12 h-12" />
            <p className="text-2xl">Reabilite seu crédito em até <strong>30 dias</strong></p>
            
          </div>

          {/* Botão */}
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
};

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img-hero.jpg"
          alt="Imagem do Banner"
          fill
          className="object-cover opacity-40"
          priority
        />

        <div className="absolute inset-0 md:bg-gradient-to-r from-blue-900 via-transparent to-blue-900 bg-blue-900/60" />

        <div className="absolute inset-0 md:bg-gradient-to-l from-blue-900 via-transparent to-blue-900" />
      </div>

      <div className="h-[70vh] md:h-[90vh] flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 pt-44 md:pt-0">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-lg mb-6">
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
          <p className="text-white text-lg md:text-xl max-w-md mb-8">
            Recupere seu crédito com quem entende do assunto. Atendimento
            rápido, seguro e personalizado.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded shadow-lg hover:bg-blue-700 transition"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
};

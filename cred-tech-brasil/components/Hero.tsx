"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-50 to-white">
      <div className="h-[90vh] flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 gap-12 pt-44 md:pt-0">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight max-w-lg mb-6">
            Soluções rápidas para seu{" "}
            <span className="relative text-blue-600">
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
          <p className="text-gray-700 text-lg md:text-xl max-w-md mb-8">
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

        {/* Lado Imagem */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          <Image
            src="/hero-cleaning.jpg"
            alt="Profissional limpando documentos"
            className="mx-auto rounded-lg shadow-lg object-cover"
            width={800}
            height={800}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

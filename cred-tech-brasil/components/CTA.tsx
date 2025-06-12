"use client";
import React from "react";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="py-20 bg-[#00C8C5] text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-2">Importante</h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-md opacity-90"
        >
          O processo de limpeza do CPF ou CNPJ remove os registros negativos,
          mas não elimina a dívida em si. Ela continua ativa na instituição
          credora, sendo necessário negociar e quitar o valor para uma
          regularização completa no mercado.
        </motion.p>
      </div>
    </section>
  );
};

"use client";
import { motion } from "framer-motion";
import React from "react";

export const Process = () => {
  return (
    <section id="process" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-gray-800 mb-10"
        >
          Como Funciona
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Diagnóstico Financeiro",
              desc: "Análise completa da sua situação financeira, identificando todas as dívidas e restrições.",
            },
            {
              title: "Orçamento & Contrato",
              desc: "Elaboração de um plano personalizado, apresentando um orçamento e contrato claros.",
            },
            {
              title: "Entrega do Nome Limpo",
              desc: "Remoção das restrições e restauração do seu nome, devolvendo-lhe a liberdade financeira.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#00C8C5] p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 h-84 flex flex-col justify-center gap-10"
            >
              <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

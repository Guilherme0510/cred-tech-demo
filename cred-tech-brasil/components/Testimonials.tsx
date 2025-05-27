"use client";
import { motion } from "framer-motion";
import React from "react";

export const Testimonials = () => {
 const testimonials = [
  {
    name: "Ana Souza",
    role: "Empresária",
    quote:
      "A Cred Tech Brasil me ajudou a limpar meu nome de forma rápida e eficiente. Recomendo demais!",
  },
  {
    name: "Carlos Silva",
    role: "Autônomo",
    quote:
      "Excelente atendimento e transparência durante todo o processo. Empresa séria!",
  },
  {
    name: "Juliana Mendes",
    role: "Professora",
    quote:
      "Tive meu crédito restaurado em poucos dias. Equipe muito atenciosa!",
  },
];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center text-gray-800 mb-12"
        >
          Depoimentos de Clientes
        </motion.h3>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 italic mb-4">{t.quote}</p>
              <div className="text-sm font-medium text-gray-900">{t.name}</div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

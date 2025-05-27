"use client";
import React from "react";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section  className="py-20 bg-[#00C8C5] text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Pronto para restaurar seu nome?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          Entre em contato conosco e saiba como podemos ajudá-lo a alcançar seus
          objetivos financeiros.
        </motion.p>
        <a
          href="https://wa.me/5511952703236"
            target="_blank"
            rel="noopener noreferrer"
          className="bg-white text-[#00C8C5] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Fale Conosco
        </a>
      </div>
    </section>
  );
};

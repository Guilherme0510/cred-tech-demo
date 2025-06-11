"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  FileSearch,
  Landmark,
  BadgeDollarSign,
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Desalienação e Suspensão de Contratos",
      desc: "Liberamos bens alienados por dívidas bancárias e suspendemos contratos financeiros, permitindo a exclusão da empresa e de seus sócios dos órgãos de restrição como SERASA, SPC e BACEN.",
      icon: Handshake,
    },
    {
      title: "Certidão Negativa Fiscal",
      desc: "Regularizamos pendências com a Receita Federal, garantindo conformidade fiscal para empresas do Simples Nacional, Lucro Presumido e Lucro Real, promovendo segurança e estabilidade jurídica.",
      icon: FileSearch,
    },
    {
      title: "Precatórios como Solução Fiscal",
      desc: "Acompanhamos todo o processo de compra e venda de precatórios. Empresas podem usá-los para quitar dívidas tributárias, reduzindo passivos com respaldo jurídico sólido.",
      icon: Landmark,
    },
    {
      title: "Recuperação de Créditos Tributários",
      desc: "Recuperamos valores pagos indevidamente em tributos como PIS, COFINS, folha de pagamento e multas federais. Otimize sua gestão fiscal e recupere recursos perdidos.",
      icon: BadgeDollarSign,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-gray-800 mb-10"
        >
          Nossos Serviços
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#00C8C5] p-6 min-h-[200px] rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex items-center gap-6"
            >
              <item.icon className="w-12 h-12 text-white flex-shrink-0" />

              <div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <a
          href="https://wa.me/5511952703236"
            target="_blank"
            rel="noopener noreferrer"
          className="bg-[#FEB044] text-white z-50 font-semibold px-6 py-3 rounded-lg hover:bg-[#a08054] transition"
        >
          Fale Conosco
        </a>
      </div>
    </section>
  );
};

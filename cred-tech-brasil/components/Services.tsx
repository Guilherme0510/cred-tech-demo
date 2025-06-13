"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FolderSearch,
  UserCheck,
  Banknote,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const Services = () => {
  const ctaServicos = [
    {
      title: "Nome Limpo no Serasa e SPC",
      icon: BadgeCheck,
    },
    {
      title: "Regularização do seu nome",
      icon: ShieldCheck,
    },
    {
      title: "Aumento de Score",
      icon: TrendingUp,
    },
  ];

  const services = [
    {
      title: "Quitação de Dívidas com Precatórios",
      desc: "Acompanhamos todo o processo de compra e venda de precatórios. Empresas podem usá-los para quitar dívidas tributárias, reduzindo passivos com respaldo jurídico sólido.",
      icon: Banknote,
    },
    {
      title: "Limpa Nome",
      desc: "Pessoas físicas e empresas vinculadas à Cred Tech têm a oportunidade de limpar seu nome por meio da filiação a uma associação de defesa do consumidor e participação em ações coletivas. Com respaldo jurídico, garantimos a exclusão de registros negativos em órgãos como SERASA, SPC e Boa Vista — tudo com garantia contratual de conclusão em até 35 dias úteis ou reembolso integral.",
      icon: UserCheck,
    },
    {
      title: "Histórico do Bacen",
      desc: "Por meio de procedimento administrativo, eliminamos registros de dívidas vencidas ou em prejuízo no relatório SCR do Registrato (Sisbacen). Esse documento tem se tornado cada vez mais decisivo na concessão de crédito por instituições financeiras.",
      icon: FolderSearch,
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      {/* Bloco 1: CTA Serviços */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Soluções Rápidas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaServicos.map((servico, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <servico.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-center text-gray-800">
                {servico.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bloco 2: Serviços Detalhados */}
      <div className="max-w-6xl mx-auto flex flex-col">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Serviços Especializados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((servico, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <servico.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {servico.title}
              </h3>
              <p className="text-gray-600 text-sm">{servico.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mx-auto">
          {" "}
          <a
            href="https://wa.me/5511952703236"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FEB044] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#9b7c52] transition"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

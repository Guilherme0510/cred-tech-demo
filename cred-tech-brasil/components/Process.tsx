"use client";
import { motion } from "framer-motion";
import { BadgeCheck, CheckCircle, FileText } from "lucide-react";
import React from "react";

const items = [
  {
    title: "Diagnóstico Financeiro",
    desc: "Realizamos uma análise minuciosa do seu CPF ou CNPJ para mapear todas as dívidas e restrições existentes. Essa etapa é essencial para entendermos sua situação atual e traçarmos a melhor estratégia de recuperação financeira.",
    icon: CheckCircle,
  },
  {
    title: "Orçamento & Contrato",
    desc: "Com base no diagnóstico, elaboramos um plano sob medida, com orçamento transparente e contrato objetivo. Você saberá exatamente o que será feito, prazos envolvidos e valores investidos — tudo com total clareza e segurança jurídica.",
    icon: FileText,
  },
  {
    title: "Entrega do Nome Limpo",
    desc: "Após a negociação e regularização das pendências, entregamos seu nome limpo e apto para voltar a obter crédito. Você recebe a confirmação oficial da baixa das dívidas, com total respaldo e tranquilidade para retomar sua vida financeira.",
    icon: BadgeCheck,
  },
];

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
        <div className="flex flex-col gap-8">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#00C8C5] p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex items-center gap-6"
          >
            <Icon size={40} className="text-white flex-shrink-0" />
            <div>
              <h4 className="text-2xl font-bold text-white mb-5">{item.title}</h4>
              <p className="text-white/90">{item.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
      </div>
    </section>
  );
};

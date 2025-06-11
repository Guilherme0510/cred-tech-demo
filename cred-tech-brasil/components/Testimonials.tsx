"use client";
import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
 const testimonials = [
  {
    name: "Ana Souza",
    role: "Empresária do setor de moda",
    quote:
      "A Cred Tech Brasil foi essencial para reerguer meu negócio. Em menos de uma semana, meu nome estava limpo e pude voltar a comprar com meus fornecedores. Atendimento ágil e muito humano!",
  },
  {
    name: "Carlos Silva",
    role: "Trabalhador autônomo",
    quote:
      "Fui tratado com respeito do início ao fim. A equipe explicou tudo com clareza e resolveu meu problema com dívidas antigas que eu nem sabia mais como lidar. Gratidão eterna!",
  },
  {
    name: "Juliana Mendes",
    role: "Professora da rede pública",
    quote:
      "Recuperei meu crédito em poucos dias e consegui, enfim, financiar meu carro. A equipe da Cred Tech Brasil foi super dedicada e me manteve informada o tempo todo.",
  },
  {
    name: "Ricardo Oliveira",
    role: "Microempreendedor",
    quote:
      "Estava com o CNPJ negativado há meses, sem conseguir crédito. A Cred Tech Brasil analisou meu caso e resolveu tudo com rapidez. Hoje, minha empresa voltou a crescer!",
  },
  {
    name: "Fernanda Lima",
    role: "Assistente administrativa",
    quote:
      "Depois de cair num golpe financeiro, achei que nunca mais teria meu nome limpo. A Cred Tech Brasil não só resolveu, como também me orientou para não passar por isso novamente. Super recomendo!",
  },
];


  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center text-gray-800 mb-12"
        >
          Depoimentos de Clientes
        </motion.h3>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          className="w-full"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 italic mb-4 text-lg">{t.quote}</p>
                <div className="text-sm font-medium text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

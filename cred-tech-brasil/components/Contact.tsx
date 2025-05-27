"use client";

import React, { useState } from "react";
import Image from "next/image";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/mwpogejl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Mensagem enviada com sucesso!");
      setFormData({ nome: "", email: "", whatsapp: "" });
    } else {
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <section className="bg-white py-10" id="contact">
      <div className="min-h-screen flex flex-col md:flex-row max-w-7xl mx-auto rounded-2xl shadow-lg overflow-hidden">
        <div className="md:w-1/2 p-10 sm:p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold mb-8 text-gray-800 text-center md:text-left">
            Fale Conosco
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              {
                id: "nome",
                label: "Nome",
                type: "text",
                placeholder: "Seu nome",
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "seuemail@exemplo.com",
              },
              {
                id: "whatsapp",
                label: "WhatsApp",
                type: "tel",
                placeholder: "+55 11 99999-9999",
                pattern: "^\\+?\\d{7,15}$",
              },
            ].map(({ id, label, type, placeholder, pattern }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  value={formData[id as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  pattern={pattern}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl
                focus:outline-none focus:ring-4 focus:ring-blue-400
                transition duration-300 ease-in-out
                placeholder:text-gray-400
                bg-gray-50
                hover:border-blue-500"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl cursor-pointer
            hover:bg-blue-700 active:bg-blue-800
            transition duration-300 ease-in-out
            shadow-md
            focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
        <div className="md:w-1/2 bg-blue-600 text-white flex flex-col justify-center p-10 sm:p-16">
          <h3 className="text-4xl font-extrabold mb-4">
            Estamos aqui para ajudar!
          </h3>
          <p className="mb-8 text-lg leading-relaxed">
            Precisa de ajuda? Entre em contato com a gente pelo formulário ou
            diretamente pelo WhatsApp. Nossa equipe responde rapidinho para
            tirar suas dúvidas e oferecer o melhor atendimento.
          </p>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/contact-illustration.png"
              alt="Contato"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

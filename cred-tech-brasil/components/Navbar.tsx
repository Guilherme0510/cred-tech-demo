"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false); // Fecha o menu mobile ao clicar
  };

  return (
    <div className=" shadow fixed top-0 md:top-0 left-0 w-full z-50">
      <div className="bg-blue-600 text-white text-sm px-4 py-2 flex justify-center md:justify-between items-center w-full">
        <div className="hidden md:flex space-x-6">
          <span className="flex items-center gap-1">
            🕘 Seg a Sex: 24 Horas
          </span>
          <a href="mailto:credtechbrasilacessoria@gmail.com" className="hover:underline">
            📧 credtechbrasilacessoria@gmail.com
          </a>
          <a
            href="https://wa.me/5511952703236"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            💬 WhatsApp
          </a>
        </div>
        <div className="md:hidden text-center">
          <a href="https://wa.me/5511952703236" className="hover:underline">
            💬 Atendimento via WhatsApp
          </a>
        </div>
      </div>

      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" aria-label="Home">
            <Image src="/logo.png" alt="Logo" width={100} height={50} />
          </a>

          <nav className="hidden md:flex space-x-8">
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToId("sobre")}
                className="text-gray-700 hover:text-gray-900 transition cursor-pointer"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToId("services")}
                className="text-gray-700 hover:text-gray-900 transition cursor-pointer"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToId("process")}
                className="text-gray-700 hover:text-gray-900 transition cursor-pointer"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToId("contact")}
                className="text-blue-600 hover:underline font-semibold transition cursor-pointer"
              >
                Contato
              </button>
            </nav>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`block absolute h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                  menuOpen ? "rotate-45 top-2.5" : "top-1"
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-in-out ${
                  menuOpen ? "opacity-0" : "top-3"
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                  menuOpen ? "-rotate-45 top-2.5" : "top-5"
                }`}
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg overflow-hidden"
            >
              <div className="flex flex-col space-y-4 px-6 py-4 text-center">
                <button
                  onClick={() => scrollToId("sobre")}
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToId("services")}
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToId("process")}
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  Como Funciona
                </button>
                <button
                  onClick={() => scrollToId("contact")}
                  className="text-blue-600 hover:underline font-semibold transition"
                >
                  Contato
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

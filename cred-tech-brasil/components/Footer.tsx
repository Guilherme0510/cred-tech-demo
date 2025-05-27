import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center text-gray-600">
      <p>&copy; {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.</p>
    </footer>
  )
}
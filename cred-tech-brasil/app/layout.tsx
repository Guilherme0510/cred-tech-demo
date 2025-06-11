// app/layout.tsx ou app/layout.js
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Cred Tech Brasil - Limpeza de Nome e Crédito",
  description:
    "Recupere seu crédito com a Cred Tech Brasil. Soluções eficazes para limpar seu CPF ou CNPJ com rapidez e segurança.",
  keywords: [
    "limpar nome",
    "CPF negativado",
    "recuperar crédito",
    "Cred Tech Brasil",
    "nome sujo",
    "limpeza de crédito",
    "CNPJ negativado",
  ],
  authors: [{ name: "Cred Tech Brasil", url: "https://credtechbrasil.com.br" }],
  metadataBase: new URL("https://credtechbrasil.com.br"),
  openGraph: {
    title: "Cred Tech Brasil - Limpeza de Nome e Crédito",
    description:
      "Soluções eficazes para limpar seu CPF ou CNPJ com rapidez e segurança.",
    url: "https://credtechbrasil.com.br",
    siteName: "Cred Tech Brasil",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://credtechbrasil.com.br/logo.png",
        width: 1200,
        height: 630,
        alt: "Cred Tech Brasil - Limpeza de Nome",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cred Tech Brasil - Limpeza de Nome e Crédito",
    description:
      "Soluções eficazes para limpar seu CPF ou CNPJ com rapidez e segurança.",
    images: ["https://credtechbrasil.com.br/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Navbar />
        <main className="relative">
          <a
  href="https://wa.me/5511952703236"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-10 right-10 z-50 shadow-3xl rounded-full pulse-strong"
>
  <Image
    src="/whatsapp.png"
    width={60}
    height={60}
    alt="Ícone Whatsapp"
  />
</a>

          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

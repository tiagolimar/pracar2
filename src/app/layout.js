import Head from "next/head";
import Link from "next/link";

import "./globals.css";

export const metadata = {
  title: "Praça R2",
  description: "Sistema de gerenciamento para praças de alimentação",

};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}

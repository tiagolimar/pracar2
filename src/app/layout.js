import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Praça R2",
  description: "Sistema de gerenciamento para praças de alimentação",

};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
          {children}
      </body>
      <script
        async
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </html>
  );
}

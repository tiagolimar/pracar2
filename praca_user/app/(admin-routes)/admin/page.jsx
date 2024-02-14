import React from 'react';
import Head from 'next/head';

const AdminPage = () => {
  return (
    <>
      <Head>
        <title>Página do Administrador</title>
      </Head>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Painel do Administrador</h1>
        <p className="mb-8">
          Aqui você pode gerenciar o conteúdo do site, usuários, configurações e muito mais.
        </p>
        {/* Adicione mais conteúdo e componentes conforme necessário */}
      </div>
    </>
  );
};

export default AdminPage;
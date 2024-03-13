This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Checklist

Issues
1. Melhorar interface da home do painel de gerenciamento
1. Adicionar botão de editar para a senha do caixa
1. Criptografar token da praça;
1. Fazer com que o Form de Eventos e Pagamentos atualizem no resumo de informações (combinar useContext com useState);

1. Fazer verificação de data e horário (não permitir data e horário de término anterior ao de início)
1. Fazer verificação de horário (data atual ou futura)

1. Criar tabela de produtos
    - 

1. Criar conteúdo da seção Cardápio;
    - Criar layout do Cardápio;
    - Fazer sistema interno de criação de produtos apartir de arquivo csv;
    - Criar tabela de produtos e criar tabela de cardápios;
    - Fazer integração do Front com o Back

1. Criar sistema do caixa;
    - Separar dados do caixa em uma tabela a parte (tb_caixas);
    - Criar token do sistema do caixa;

Issues Removidos
1. Verificar necessidade de criar palavras reservadas no server para impedir criação de certo nomes de praças
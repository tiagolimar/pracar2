import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./App";

import { Produtos } from './Pages/Produtos';
/* import { Produto } from './Pages/Produto';
import { Carrinho } from './Pages/Carrinho';
import { Login } from "./Pages/Login";
import { Cadastro } from "./Pages/Cadastro"; */

import { Error } from './Pages/Error';

import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Produtos />,
                errorElement: <Error />,
            },
            {
                path: "/home",
                element: <Produtos />,
                errorElement: <Error />,
            },
/*             {
                path: "/produto/:nomeUnico",
                element: <Produto />,
                errorElement: <Error />,
            },
            {
                path: "/carrinho",
                element: <Carrinho />,
                errorElement: <Error />,
            },
            {
                path: "/login",
                element: <Login />,
                errorElement: <Error />,
            },
            {
                path: "/cadastro",
                element: <Cadastro />,
                errorElement: <Error />,
            }, */
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);


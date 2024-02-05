import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./App";

import { Home } from './components/Home/index';
import { AreaProduto } from './components/AreaProduto/index';
import { Carrinho } from './components/Carrinho/index';
import { Login } from "./pages/Login";
import { SignIn } from "./pages/SignIn";

import { Error } from './components/Error/index';

import "./main.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "/home",
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "/produto/:nomeUnico",
                element: <AreaProduto />,
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
                path: "/signin",
                element: <SignIn />,
                errorElement: <Error />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);


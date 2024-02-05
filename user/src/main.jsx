import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./App";

import { Home } from './Pages/Home';
import { AreaProduto } from './Pages/AreaProduto';
import { Carrinho } from './Pages/Carrinho';
import { Login } from "./Pages/Login";
import { SignIn } from "./Pages/SignIn";

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


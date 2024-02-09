import { useState, useEffect } from "react";
import { Categoria } from "./components/Categoria";
import { Banner } from "./components/Banner";
import img_bg from '../../assets/bg-img.jpg'
import logo from '../../assets/bolo-mole.png'

import "./style.css";

export const Home = () => {
    const [categorias, setCategorias] = useState([]);

    const dados = {
        backgroundImageUrl: img_bg,
        logoUrl: logo,
        eventName: "string",
        location: "string",
        status: "string",
        operatingHoursStart: "string",
        operatingHoursEnd: "string",
    };

    useEffect(() => {
        fetch("https://db-praca-r2.onrender.com/api/produto/categorias")
            .then((res) => res.json())
            .then(setCategorias)
            .catch((error) =>
                console.error("Erro ao carregar categorias:", error)
            );
    }, []);

    return (
        <main>
            <Banner dadosEvento={dados} />
            <section className="secao-produtos mb-4 ms-4 me-4">
                {categorias.map((categoria, id) => (
                    <Categoria key={id} nomeCategoria={categoria} />
                ))}
            </section>
        </main>
    );
};

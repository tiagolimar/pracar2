import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "@/components/url/urls.js";

export default function WakeUpServer() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                console.log(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div className="placeholder-wave">Aguarde...</div>;
    }

    return null; // Retorna null ou qualquer outro componente que você queira renderizar após a requisição ser concluída
}

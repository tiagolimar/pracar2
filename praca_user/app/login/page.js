"use client"

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
    const [telefone, setTelefone] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para lidar com o envio do formulário
        console.log(`telefone: ${telefone}, Password: ${password}`);
        const result = await signIn('credentials',{
            telefone,
            password,
            redirect: false
        })

        if (result?.error){
            console.log(result);
            return
        }

        router.replace('/admin')
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-6 sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="telefone"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Telefone:
                            </label>
                            <input
                                type="tel"
                                id="telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Senha:
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
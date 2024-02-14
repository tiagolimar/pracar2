import { getServerSession } from "next-auth";
import { NextAuthOptions } from "../api/auth/[...nextauth]/route.js";
import { redirect } from "next/navigation";

export default async function PrivateLayout({ children }){
    const session = await getServerSession(NextAuthOptions)
    if (!session){
        redirect('/')
    }
    return <>{children}</>
}
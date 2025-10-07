import { useAuth } from "@clerk/clerk-react"
import { useEffect, useState, type ReactNode } from "react";
import { Loader } from "lucide-react";
import { axiosInstance } from "@/lib/axios";

interface Props {
    children: ReactNode;
}

const updateApiToken = (token: string | null) => {
    if (token) axiosInstance.defaults.headers.common['Authorization'] = `Luis ${token}`
    else delete axiosInstance.defaults.headers.common['Authorization'];
}

const AuthProvider = ({ children }: Props) => {

    const { getToken } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const iniAuth = async () => {
            try {
                const token = await getToken();
                updateApiToken(token);
            } catch (error) {
                updateApiToken(null);
                console.log("Error in auth provider", error);
            } finally {
                setLoading(false);
            }
        }
        iniAuth();

    }, [getToken, setLoading]);

    if (loading) return (
        <div className="h-screen w-full flex items-center justify-center">
            <Loader className="size-8 text-emerald-500 animate-spin" />
        </div>
    );

    return (<>{children}</>
    )
}

export default AuthProvider
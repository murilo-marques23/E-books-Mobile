import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Context/AuthContext";


export const Providers = ({ children }: { children: ReactNode}) => {
    return (
        <SafeAreaProvider>
            <AuthProvider>
            <CartProvider>
            {children}
            </CartProvider>
            </AuthProvider>
        </SafeAreaProvider>
    )
}
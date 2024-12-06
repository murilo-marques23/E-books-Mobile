import { StatusBar }from "react-native";
import { Providers } from "@/src/Providers";
import {NavigationContainer} from "@react-navigation/native";
import { Router } from "./src/routes";
import Toast from "react-native-toast-message";


export default function App() {
    return (
        <NavigationContainer>
            <Providers>
                <StatusBar barStyle="dark-content" />
                <Router/>
            </Providers>
            <Toast />
        </NavigationContainer>
    )
}
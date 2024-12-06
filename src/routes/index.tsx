import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabRouter } from "./tab-router";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "../pages/LoginScreen/LoginScreen";
import { RegisterScreen } from "../pages/RegisterScreen/RegisterScreen";
import { CartScreen } from "../pages/CartScreen/CartScreen";

const Stack = createNativeStackNavigator();

export const Router = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Initial"
            screenOptions={{
                headerShown: false,
            }}
        >
         <Stack.Screen name="Initial" component={TabRouter} />
         <Stack.Screen 
         name="Cart"
         component={CartScreen}
         options={{
            headerShown: true,
            title: "Carrinho",
         }}
         />
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Register" component={RegisterScreen}/>   
        </Stack.Navigator>
    )
}
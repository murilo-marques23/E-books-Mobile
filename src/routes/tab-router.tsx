import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "../themes/root";
import { HomeScreen } from "../pages/HomeScreen/HomeScreen";
import { AccountScreen } from "../pages/AccountScreen/AccountScreen";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TouchableOpacity, View, Text } from "react-native";

const Tab = createBottomTabNavigator();

export const TabRouter = ({ navigation}: NativeStackScreenProps<any>) => {
    const { cart } = useCart();
    const { isLogged } = useAuth();
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarInactiveTintColor: theme.colors.gray[200],
            tabBarActiveTintColor: theme.colors.gray[800],
            headerRight: () => (
                <TouchableOpacity
                style={{
                    marginRight: 12,
                }}
                onPress={() => navigation.navigate("Cart")}
                >
                    <FontAwesome6 
                        name="cart-shopping"
                        color={theme.colors.gray[300]}
                        size={25}
                    />
                    {cart?.length > 0 && (
                        <View
                        style={{
                            position: "absolute",
                            bottom: -6,
                            right: -3,
                            backgroundColor: theme.colors.red[400],
                            borderRadius: 50,
                            width: 15,
                            height: 15,
                        }}
                        >
                            <Text
                                style={{
                                    color: theme.colors.white,
                                    textAlign: "center",
                                    fontSize: 12,
                                    fontWeight: "700",
                                }}
                            >
                                {cart?.length}
                            </Text>

                        </View>
                    )}

                </TouchableOpacity>
            )
            
            
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="library-sharp" color={color} size={size} />
                            ),
                            title: "Início",
                        }}  
            />  
            <Tab.Screen name="Conta" component={AccountScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name={isLogged ? "user-large" : "door-open"}
                        color={color} 
                        size={size} 
                        />
                    ),
                    title: isLogged ? "Conta" : "Login",
                }}
            />
        </Tab.Navigator>
    )
}
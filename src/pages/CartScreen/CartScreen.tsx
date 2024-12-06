import { useCart } from "@/src/Context/CartContext"
import { checkout, order } from "@/src/Service/checkout.service";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { openBrowserAsync } from "expo-web-browser";
import { ActivityIndicator, FlatList, View, Text } from "react-native";
import { styles } from "./styles";
import { ProductCard } from "@/src/Components/ProductCard/ProductCard";
import { theme } from "@/src/themes/root";
import { Button } from "@/src/Components/Button/Button";
import { ProductCartItem } from "@/src/Components/ProductCartItem/ProductCartItem";


export const CartScreen = () => {
    const { cart, totalCart, clearCart} =useCart();
    const [ isLoading, setIsLoading ] = useState(false);

    const handleCheckout = async () => {
        try {
          const orderId = await order(cart);
          const url = await checkout(orderId);
          clearCart();
          Toast.show({
            type: "Success",
            text1: "Compra Finalizada",
            text2: "Aguardando a realização do pagamento",
          });
          await openBrowserAsync(url);
        } catch (error){
          Toast.show({
            type: "error",
            text1: "Error ao finalizar compra",
            text2: "Tente novamente mais tarde"
          })
        } finally {
          setIsLoading(false);
        }
      }
      return (
        <View style={styles.container}>
            <FlatList
            data={cart}
            style={styles.cartList}
            keyExtractor={( item ) => String(item.id)}
            renderItem={({ item }) => <ProductCartItem item={item}/>} 
            />
            {isLoading && (<ActivityIndicator size="large" color={theme.colors.blue[600]}/>
        )}
         <View style={styles.footer}>
        <Text style={styles.totalPrice}>
          {(totalCart / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
        {!isLoading && (
          <View style={styles.buttonContainer}>
            <Button 
              text="Limapar Carrinho"
              variant="secondary"
              onPress={() => clearCart()}
              />
              <Button text="Checkout" onPress={handleCheckout} />
              </View>
        )}
        </View>
        </View>
      )
      
}
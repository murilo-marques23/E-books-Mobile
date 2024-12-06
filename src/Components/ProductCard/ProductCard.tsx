import { ProductModel } from "@/src/Service/product.service"
import { FC } from "react";
import { View, Text,   TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useCart } from "@/src/Context/CartContext";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";

interface ProductCardProps {
    product: ProductModel;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { addProduct } = useCart();
    return(
        <View style={styles.productCardContainer}>
            <View style={styles.productContainer}>
                <Image 
                style={styles.productImage}
                source={`${process.env.EXPO_PUBLIC_BASE_URL}/${product.img}`}
                />
                <View>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productPreco}>{(product.preco / 100).toLocaleString("pt-br", {
                        currency: "BRL",
                        style: "currency",
                    })}</Text>
                    <Text style={styles.productScore}>{product.score}</Text>
                </View>
            </View>
            <TouchableOpacity 
            style={styles.productButton}
            onPress={() => addProduct(product)}
            > 
            <View style={styles.productButtonContainer}>
                <FontAwesome6
                name="cart-plus"
                size={16}
                color="white"
                
                />
                <Text style={styles.productButtonText}>Adicionar ao Carrinho</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}


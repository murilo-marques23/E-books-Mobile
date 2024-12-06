import { useCart } from "@/src/Context/CartContext";
import { ProductModel } from "@/src/Service/product.service";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";
import { FontAwesome6 } from "@expo/vector-icons";


export const ProductCartItem = ({
    item,
}: {
    item: ProductModel & { amount: number};
}) => {
    const { removeProduct, addQuantity, subQuantity } = useCart();
    return (
        <View style={styles.itemContainer}>
            <Image 
            style={styles.itemImage}
            source={`${process.env.EXPO_PUBLIC_BASE_URL}/${item.img}`}
            contentFit="cover"
            />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>
                {(item.preco / 100).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
                </Text>
                <View style={styles.itemQuantityView}>
                    <TouchableOpacity style={styles.itemQuantityButton}
                    onPress={() => subQuantity(item.id)} 
                    >
                        <FontAwesome6
                            name="minus"
                            size={12}
                            style={styles.itemQuantityIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.itemQuantity}>{item.amount}</Text>
                    <TouchableOpacity
                     style={styles.itemQuantityButton}
                     onPress={() => addQuantity(item.id)}
                    >
                        <FontAwesome6 
                        name="plus"
                        size={12}
                        style={styles.itemQuantityIcon}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.itemTotalPrice}>
                    Total:{" "}
                    {((item.preco / 100) * item.amount).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    })}
                </Text>
            </View>
            <TouchableOpacity style={styles.itemRemoveButton}>
                <FontAwesome6 
                    name="trash"
                    size={16}
                    style={styles.itemRemoveIcon}
                    onPress={() => removeProduct(item.id)}
                />
            </TouchableOpacity>
        </View>
    )
}
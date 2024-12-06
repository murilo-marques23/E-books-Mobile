import { ProductCard } from "@/src/Components/ProductCard/ProductCard";
import { getProducts, ProductModel } from "@/src/Service/product.service";
import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";



export const HomeScreen = () => {
const [ isLoading, setIsLogged ] = useState(true);
const [ products, setProducts ] = useState<ProductModel[]>([]);

const fetchProducts = async () => {
    setIsLogged(true);
    try{
        const products = await getProducts();
        setProducts(products);
    } catch(e) {
        console.error(e);
    } finally {
        setIsLogged(false)
    }
};

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <View>
            {isLoading && <ActivityIndicator size="large" />}
            {!isLoading && (
                <FlatList 
                    data={products}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <ProductCard product={item} />}
                />
            )}
        
        </View>
    )
}
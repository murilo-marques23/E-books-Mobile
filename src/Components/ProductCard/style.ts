
import { textColors, theme } from "@/src/themes/root";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    productCardContainer: {
     backgroundColor: theme.colors.white,
     borderWidth: 1,
     borderColor: theme.colors.gray[100],
     borderRadius: 4,
     padding: 4,
     gap: 4,
     elevation: 2,
    },
    productContainer: {
      flexDirection: "row",
      gap: 10,
    },
    productImage: {
     width: 80,
     height: 80,
     borderRadius: 2,
    },
    productName: {
     fontWeight: "700",
     fontSize: 18,
    },
    productPreco: {
     fontSize: 18,
     fontWeight: "700",
     color: theme.colors.blue[400],
    },
    productScore: {},
    productButton: {
     width: "100%",
     padding: 8,
     backgroundColor: theme.colors.red[400],
     borderRadius: 4,    
    },
    productButtonText: {
     color: textColors.secondary,
     textAlign: "center",
     fontSize: 16,
     fontWeight: "700",
    },
    productButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },

})
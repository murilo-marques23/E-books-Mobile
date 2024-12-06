import { theme } from "@/src/themes/root";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  cartList: {
    flexGrow: 1,
  },
  footer: {
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray[100],
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
  },
});

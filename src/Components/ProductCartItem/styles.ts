import { textColors, theme } from "@/src/themes/root";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[100],
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "700",
    color: textColors.primary,
  },
  itemPrice: {
    fontSize: 12,
    color: theme.colors.red[400],
    fontWeight: "700",
  },
  itemQuantity: {
    fontSize: 16,
    color: textColors.gray,
  },
  itemTotalPrice: {
    fontSize: 14,
    color: textColors.primary,
    fontWeight: "700",
  },
  itemRemoveButton: {
    marginLeft: "auto",
    backgroundColor: theme.colors.red[500],
    padding: 8,
    borderRadius: 4,
    width: 32,
    height: 32,
  },
  itemRemoveIcon: {
    color: textColors.secondary,
  },
  itemDetails: {
    gap: 2,
  },
  itemQuantityView: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  itemQuantityButton: {
    padding: 4,
  },
  itemQuantityIcon: {
    color: theme.colors.gray[200],
  },
});

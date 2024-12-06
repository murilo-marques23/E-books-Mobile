import { textColors, theme } from "@/src/themes/root";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerInput: {
        height: 44,
        width: "100%",
        flexDirection: "row",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        backgroundColor: theme.colors.gray[200],
      },
      input: {
        fontSize: 20,
        flexGrow: 1,
        padding: 4,
        color: textColors.primary,
      },
      inputError: {
        borderWidth: 1,
        borderColor: theme.colors.red[500],
      },
});
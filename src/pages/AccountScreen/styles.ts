import { textSizes, theme } from "@/src/themes/root";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 4,
        flexGrow: 1,
    },
    title: {
        fontSize: textSizes.lg,
        fontWeight: "bold",
        marginBottom: 8,
    },
    profile: {
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray[100],
        paddingBottom: 4,
        marginBottom: 4,
    },
    profileItem: {
        marginBottom: 4,
    },
    footer: {
        marginTop: "auto",
        borderTopWidth: 1,
        borderTopColor: theme.colors.gray[100],
    },
    footerButton: {
        padding: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    footerButtonText: {
        color: theme.colors.red[500],
        fontSize: textSizes.md,
        fontWeight: "bold",
    },
    products: {},
    productTitle: {
        fontSize: textSizes.md,
        fontWeight: "bold",
        marginBottom: 4,
    },
    productButton: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray[100],
    },
    productButtonName:{
        fontSize: textSizes.md,
        fontWeight: "bold",
    },
    productButtonPrice: {
        fontSize: textSizes.md,
        color: theme.colors.green[500],
        fontWeight: "bold"
    },
    containerLogin: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    loginText: {
        fontSize: textSizes.lg,
        marginBottom: 8,
    },
    loginButton: {
        padding: 8,
        backgroundColor: theme.colors.blue[400],
        borderRadius: 4,
    },
    loginButtonText:{
        color: theme.colors.white,
        fontSize: textSizes.md,
        fontWeight: "bold",
    },
});

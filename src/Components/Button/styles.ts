import {
    backgroundColors,
    buttonColors,
    textColors,
    theme,
  } from "@/src/themes/root";
  import { StyleSheet } from "react-native";
  
  export const styles = StyleSheet.create({
    buttonSecondary: {
      padding: 8,
      flexGrow: 1,
      borderRadius: 8,
      backgroundColor: buttonColors.secondary,
    },
    buttonLink: {
      padding: 8,
      flexGrow: 1,
    },
    buttonPrimary: {
      padding: 8,
      backgroundColor: buttonColors.primary,
      flexGrow: 1,
      borderRadius: 8,
    },
    textSecondary: {
      fontSize: 16,
      textAlign: "center",
      color: textColors.secondary,
      fontWeight: "700",
    },
    textLink: {
      fontSize: 16,
      textAlign: "center",
      color: theme.colors.blue[400],
      fontWeight: "700",
    },
    textPrimary: {
      fontSize: 16,
      textAlign: "center",
      color: textColors.secondary,
      fontWeight: "700",
    },
  });
  
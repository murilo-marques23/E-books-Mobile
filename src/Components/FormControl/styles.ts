import { textColors, textSizes, theme } from "@/src/themes/root";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    formControl: {
      width: "100%",
      gap: 6,
    },
    label: {
      fontSize: textSizes.md,
      fontWeight: "400",
      lineHeight: 24.51,
      color: textColors.primary,
    },
    requiredLabel: {
      color: theme.colors.red[500],
    },
    error: {
      fontSize: textSizes.sm,
      color: theme.colors.red[500],
      fontWeight: "700",
    },
  });
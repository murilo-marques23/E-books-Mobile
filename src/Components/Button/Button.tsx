import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";


interface ButtonProps {
    text: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "link";
}

export const Button = ({ text, onPress, variant = "primary"}: ButtonProps) => {
    return( 
        <TouchableOpacity
      onPress={onPress}
      style={
        variant === "secondary"
          ? styles.buttonSecondary
          : variant === "link"
          ? styles.buttonLink
          : styles.buttonPrimary
      }
    >
      <Text
        style={
          variant === "secondary"
            ? styles.textSecondary
            : variant === "link"
            ? styles.textLink
            : styles.textPrimary
        }
      >
        {text}
      </Text>
    </TouchableOpacity>

    )
}
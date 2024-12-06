import { ReactNode } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface FormControlProps {
    children: ReactNode;
    label?: string;
    isRequired?: boolean;
    error?: string;
}

export const FormControl = ({
    children,
    label,
    isRequired,
    error,
}: FormControlProps) => {
    return (
      <View style={styles.formControl}>
        {label && (
          <Text style={styles.label}>
            {label}
            {isRequired && <Text style={styles.requiredLabel}> *</Text>}
          </Text>
        )}
        {children}
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  };
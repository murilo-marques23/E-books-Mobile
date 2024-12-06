import { forwardRef } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { FormControl } from "../FormControl/FormControl";
import { styles } from "./styles";


interface InputProps extends TextInputProps {
    label?: string;
    isRequired?: boolean;
    id: string;
    error?: string;
}

const InputBase = (
    { label, isRequired, secureTextEntry, error, ...rest}: InputProps,
    ref: any
) => {
    return (
        <FormControl label={label} isRequired={isRequired} error={error}>
            <View style={[styles.containerInput, error ? styles.inputError: null]}>
                <TextInput
                    ref={ref}
                    secureTextEntry={secureTextEntry}
                    style={styles.input}
                    {...rest}
                />
            </View>
        </FormControl>
    )
}

export const Input = forwardRef<any, InputProps>(InputBase);

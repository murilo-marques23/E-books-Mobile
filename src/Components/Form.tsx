import {  createElement, FC, ReactElement, useEffect } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { View, ViewStyle } from "react-native";

interface FormProps {
    children: ReactElement | ReactElement[];
    setValue: UseFormSetValue<any>;
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
    style?: ViewStyle;
}

export const Form: FC<FormProps> = ({
    children,
    setValue,
    register,
    errors,
    style,
}) => {
    const inputs = Array.isArray(children) ? [...children] : [children];

    useEffect(() => {
        inputs.forEach((inputs) => {
            if (inputs.props.id) {
                register(inputs.props.id);
            }
        });
    }, [register]);

    return (
        <View style={style}>
            {inputs.map((input) =>
                input.props.id
                ? createElement(input.type, {
                    error: errors[input.props.id]?.message,
                    onChangeText: (value: string) => setValue(input.props.id, value),
                    key: input.props.id,
                    ...input.props,
                })
                : input
            )}
            
        </View>
    );
}
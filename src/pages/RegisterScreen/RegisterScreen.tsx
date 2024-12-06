import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./schema";
import { useAuth } from "@/src/Context/AuthContext";
import { useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { View, Text, } from "react-native";
import { Form } from "@/src/Components/Form";
import { Input } from "@/src/Components/Input/Input";
import { Button } from "@/src/Components/Button/Button";


export const RegisterScreen = ({navigation}: NativeStackScreenProps<any>) => {
 const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
 } = useForm({
    mode: "all",
    resolver: zodResolver(registerSchema),
 });
 const { signUp } = useAuth();
 const onSubmit = async (data: any) => {
     await signUp (data);
     navigation.navigate("Login")
 };

 return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerBox}>
            <Text style={styles.title}>Cadastre-se</Text>
        
        <View style={styles.containerForm}>
         <Form
            errors={errors}
            register={register}
            setValue={setValue}
            style={styles.containerForm}
            >
            <Input label="Nome" id="name" isRequired />
            <Input label="E-mail" id="email" isRequired />
            <Input label="Senha" id="password" secureTextEntry isRequired/>
            <Input label="Confirme sua Senha" id="password_confirmation" secureTextEntry isRequired/>
         </Form>
         <View style={styles.buttonContainer}>
            <Button 
            text="cadastrar"
            onPress={() => {
                handleSubmit(onSubmit)();
            }}
            />
            <View style={styles.loginTextContainer}>
                <Text style={styles.loginText}>Ja Possui uma conta?</Text>
                <Button
                text="Faça seu login"
                onPress={() => {
                    navigation.navigate("Login");
                }}
                variant="link"
                />
            </View>
          </View>
       </View>
     </View>       
    </SafeAreaView>

 )
    
}
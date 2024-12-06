import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string({ message: "O nome é obrigatório" }),
    email: z
      .string({ message: "O e-mail é obrigatório" })
      .email({ message: "E-mail inválido" }),
    password: z
      .string({ message: "A senha é obrigatória" })
      .min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
    password_confirmation: z
      .string({ message: "A confirmação de senha é obrigatória" })
      .min(8, {
        message: "A confirmação de senha deve ter no mínimo 8 caracteres",
      }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "As senhas não coincidem",
    path: ["password_confirmation"],
  })
  .refine(
    (data) => {
      const fullName = data.name.split(" ");

      return fullName.length > 1;
    },
    {
      message: "Informe seu sobrenome",
      path: ["name"],
    }
);

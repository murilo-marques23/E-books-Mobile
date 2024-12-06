import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ message: "O e-mail é obrigatório" })
    .email({ message: "E-mail inválido" }),
  password: z
    .string({
      message: "A senha é obrigatória",
    })
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
});

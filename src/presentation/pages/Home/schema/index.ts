import { z } from "zod";

export const schema = z.object({
  cpf: z.string().nonempty("Campo obrigatorio"),
});

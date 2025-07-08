import { config } from "dotenv";
import { z } from "zod";

config();

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().startsWith("postgresql://"),
});

export const env = envSchema.parse(process.env);

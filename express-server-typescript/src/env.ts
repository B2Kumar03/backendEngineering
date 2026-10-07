import path from "node:path";
import { z } from "zod";

// Node does not load .env files into process.env unless asked.
process.loadEnvFile(path.resolve(process.cwd(), "src", ".env"));

const envSchema = z.object({
    PORT: z.string().optional(),
    API_KEY: z.string().optional(),

})
function createEnv(env: NodeJS.ProcessEnv) {
    const safeParseResult = envSchema.safeParse(env);
    if (!safeParseResult.success) throw new Error(safeParseResult.error.message);
    return safeParseResult.data;
}

export const env = createEnv(process.env)
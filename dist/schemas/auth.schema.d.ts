import { z } from 'zod';
/**
 * Login schema for validation
 */
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
/**
 * Login DTO type inferred from schema
 */
export type LoginDTO = z.infer<typeof loginSchema>;
/**
 * Auth response type
 */
export interface AuthResponse {
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
    };
    token: string;
}
//# sourceMappingURL=auth.schema.d.ts.map
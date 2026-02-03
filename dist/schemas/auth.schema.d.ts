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
 * Auth response type (matches backend response)
 */
export interface AuthResponse {
    accessToken: string;
    user: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        phone?: string;
        profilePictureUrl?: string;
        status: string;
        hasClientProfile: boolean;
        hasProfessionalProfile: boolean;
        isAdmin: boolean;
    };
}
//# sourceMappingURL=auth.schema.d.ts.map
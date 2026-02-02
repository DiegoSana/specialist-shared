import { z } from 'zod'

/**
 * Login schema for validation
 */
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

/**
 * Login DTO type inferred from schema
 */
export type LoginDTO = z.infer<typeof loginSchema>

/**
 * Auth response type
 */
export interface AuthResponse {
  user: {
    id: string
    email: string
    name: string
    role: string
  }
  token: string
}


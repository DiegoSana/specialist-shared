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
 * Auth response type (matches backend response)
 */
export interface AuthResponse {
  accessToken: string
  user: {
    id: string
    email: string
    firstName: string
    lastName: string
    phone?: string
    profilePictureUrl?: string
    status: string
    hasClientProfile: boolean
    hasProfessionalProfile: boolean
    isAdmin: boolean
  }
}



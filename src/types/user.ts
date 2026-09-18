/**
 * User status (mirrors the backend `UserStatus` enum)
 */
export enum UserStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  BANNED = 'BANNED',
}

/**
 * User as returned by the backend (`UserProfileResponseDto`, e.g. GET /users/me).
 *
 * There is no single `role`: a user can independently have client, professional
 * and company profiles, plus the `isAdmin` flag. Dates are ISO strings on the wire.
 */
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string | null
  profilePictureUrl: string | null
  isAdmin: boolean
  status: UserStatus
  hasClientProfile: boolean
  hasProfessionalProfile: boolean
  hasCompanyProfile: boolean
  phoneVerified: boolean
  emailVerified: boolean
  createdAt: string
  updatedAt: string
}

/**
 * @deprecated The backend has no single user role; use the `has*Profile` flags and
 * `isAdmin` on `User` instead. Kept only so existing imports keep compiling.
 */
export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  PROFESSIONAL = 'PROFESSIONAL',
  COMPANY = 'COMPANY',
}

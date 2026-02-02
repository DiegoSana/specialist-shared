/**
 * User entity type
 */
export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    createdAt: string;
    updatedAt: string;
    phone?: string;
    emailVerified?: boolean;
    phoneVerified?: boolean;
}
/**
 * User role enum
 */
export declare enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN",
    PROFESSIONAL = "PROFESSIONAL",
    COMPANY = "COMPANY"
}
/**
 * User status
 */
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SUSPENDED = "SUSPENDED"
}
//# sourceMappingURL=user.d.ts.map
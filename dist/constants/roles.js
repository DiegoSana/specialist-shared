/**
 * @deprecated The backend has no single user role; use the `has*Profile` flags and
 * `isAdmin` on `User` instead. Kept only so existing imports keep compiling.
 */
export const USER_ROLES = {
    USER: 'USER',
    ADMIN: 'ADMIN',
    PROFESSIONAL: 'PROFESSIONAL',
    COMPANY: 'COMPANY',
};
/**
 * User status constants (mirrors the backend `UserStatus` enum)
 */
export const USER_STATUS = {
    PENDING: 'PENDING',
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED',
    BANNED: 'BANNED',
};
/**
 * Request status constants
 */
export const REQUEST_STATUS = {
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE',
    CANCELLED: 'CANCELLED',
};
//# sourceMappingURL=roles.js.map
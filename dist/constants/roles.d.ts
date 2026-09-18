/**
 * @deprecated The backend has no single user role; use the `has*Profile` flags and
 * `isAdmin` on `User` instead. Kept only so existing imports keep compiling.
 */
export declare const USER_ROLES: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
    readonly PROFESSIONAL: "PROFESSIONAL";
    readonly COMPANY: "COMPANY";
};
/**
 * User status constants (mirrors the backend `UserStatus` enum)
 */
export declare const USER_STATUS: {
    readonly PENDING: "PENDING";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly BANNED: "BANNED";
};
/**
 * Request status constants
 */
export declare const REQUEST_STATUS: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly DONE: "DONE";
    readonly CANCELLED: "CANCELLED";
};
//# sourceMappingURL=roles.d.ts.map
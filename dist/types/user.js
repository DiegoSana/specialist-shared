/**
 * User status (mirrors the backend `UserStatus` enum)
 */
export var UserStatus;
(function (UserStatus) {
    UserStatus["PENDING"] = "PENDING";
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["SUSPENDED"] = "SUSPENDED";
    UserStatus["BANNED"] = "BANNED";
})(UserStatus || (UserStatus = {}));
/**
 * @deprecated The backend has no single user role; use the `has*Profile` flags and
 * `isAdmin` on `User` instead. Kept only so existing imports keep compiling.
 */
export var UserRole;
(function (UserRole) {
    UserRole["USER"] = "USER";
    UserRole["ADMIN"] = "ADMIN";
    UserRole["PROFESSIONAL"] = "PROFESSIONAL";
    UserRole["COMPANY"] = "COMPANY";
})(UserRole || (UserRole = {}));
//# sourceMappingURL=user.js.map
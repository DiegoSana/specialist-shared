/**
 * Review direction (mirrors backend `ReviewDirection` Prisma enum,
 * `specialist-be/prisma/schema.prisma`).
 */
export var ReviewDirection;
(function (ReviewDirection) {
    ReviewDirection["CLIENT_TO_PROVIDER"] = "CLIENT_TO_PROVIDER";
    ReviewDirection["PROVIDER_TO_CLIENT"] = "PROVIDER_TO_CLIENT";
})(ReviewDirection || (ReviewDirection = {}));
/**
 * Review moderation status (mirrors backend `ReviewStatus` Prisma enum).
 */
export var ReviewStatus;
(function (ReviewStatus) {
    ReviewStatus["PENDING"] = "PENDING";
    ReviewStatus["APPROVED"] = "APPROVED";
    ReviewStatus["REJECTED"] = "REJECTED";
})(ReviewStatus || (ReviewStatus = {}));
//# sourceMappingURL=review.js.map
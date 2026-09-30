/**
 * Review direction (mirrors backend `ReviewDirection` Prisma enum,
 * `specialist-be/prisma/schema.prisma`).
 */
export enum ReviewDirection {
  CLIENT_TO_PROVIDER = 'CLIENT_TO_PROVIDER',
  PROVIDER_TO_CLIENT = 'PROVIDER_TO_CLIENT',
}

/**
 * Review moderation status (mirrors backend `ReviewStatus` Prisma enum).
 */
export enum ReviewStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface ReviewReviewer {
  id: string
  firstName: string
  lastName: string
}

export interface ReviewProfessionalUser {
  id: string
  firstName: string
  lastName: string
}

export interface ReviewProfessional {
  id: string
  userId: string
  user?: ReviewProfessionalUser
}

/**
 * Review as returned by the backend's moderation endpoints (`ReviewResponseDto`):
 * `GET /reviews/admin/pending`, `POST /reviews/:id/approve`, `POST /reviews/:id/reject`,
 * `POST /reviews/:id/feature`.
 *
 * Generalized in the 2026-09-30 bidirectional reviews redesign to cover both directions
 * (client rating a provider, and provider rating a client back) — see `direction`. Dates are
 * ISO strings on the wire.
 */
export interface Review {
  id: string
  direction: ReviewDirection
  reviewerId: string
  /**
   * User being reviewed: the provider's own user for CLIENT_TO_PROVIDER, the client for
   * PROVIDER_TO_CLIENT. Always set (unlike `professionalId`).
   */
  revieweeUserId: string
  /**
   * ServiceProvider being reviewed, only set for CLIENT_TO_PROVIDER reviews. Named
   * `professionalId` on the wire for backend back-compat — it is a `ServiceProvider` id, not a
   * `Professional` id (same legacy-naming gotcha as `RequestEntity.professionalId` in
   * specialist-be).
   */
  professionalId: string | null
  requestId: string | null
  rating: number
  comment: string | null
  status: ReviewStatus
  moderatedAt: string | null
  moderatedBy: string | null
  /**
   * Doble-ciego con timeout: null until both parties' reviews on the request are APPROVED, or
   * the reveal timeout elapses since the first one was created.
   */
  revealedAt: string | null
  /** Curated by admin moderation UI (isFeatured toggle), not algorithmic. */
  isFeatured: boolean
  createdAt: string
  updatedAt: string
  reviewer?: ReviewReviewer
  professional?: ReviewProfessional
}

/** Request body for `POST /reviews/:id/feature`. */
export interface ReviewFeatureInput {
  isFeatured: boolean
}

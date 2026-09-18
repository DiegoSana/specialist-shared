/**
 * Admin API contracts
 * These define the structure of admin endpoints
 */

export const AdminContract = {
  dashboard: {
    stats: {
      method: 'GET' as const,
      path: '/admin/dashboard/stats',
    },
  },
  users: {
    list: {
      method: 'GET' as const,
      path: '/admin/users',
    },
    get: {
      method: 'GET' as const,
      path: '/admin/users/:id',
    },
    updateStatus: {
      method: 'PUT' as const,
      path: '/admin/users/:id/status',
    },
    updateVerification: {
      method: 'PUT' as const,
      path: '/admin/users/:id/verification',
    },
    updateWhatsAppOptOut: {
      method: 'PUT' as const,
      path: '/admin/users/:id/whatsapp-opt-out',
    },
  },
  requests: {
    list: {
      method: 'GET' as const,
      path: '/admin/requests',
    },
    get: {
      method: 'GET' as const,
      path: '/admin/requests/:id',
    },
  },
  professionals: {
    list: {
      method: 'GET' as const,
      path: '/admin/professionals',
    },
    get: {
      method: 'GET' as const,
      path: '/admin/professionals/:id',
    },
    updateStatus: {
      method: 'PUT' as const,
      path: '/admin/professionals/:id/status',
    },
  },
  companies: {
    list: {
      method: 'GET' as const,
      path: '/admin/companies',
    },
    get: {
      method: 'GET' as const,
      path: '/admin/companies/:id',
    },
    updateStatus: {
      method: 'PUT' as const,
      path: '/admin/companies/:id/status',
    },
  },
  // Review moderation lives under /reviews (ReviewsController), not /admin.
  reviews: {
    pending: {
      method: 'GET' as const,
      path: '/reviews/admin/pending',
    },
    approve: {
      method: 'POST' as const,
      path: '/reviews/:id/approve',
    },
    reject: {
      method: 'POST' as const,
      path: '/reviews/:id/reject',
    },
  },
  notifications: {
    list: {
      method: 'GET' as const,
      path: '/admin/notifications',
    },
    stats: {
      method: 'GET' as const,
      path: '/admin/notifications/stats',
    },
    emailStatus: {
      method: 'GET' as const,
      path: '/admin/notifications/email-status',
    },
    get: {
      method: 'GET' as const,
      path: '/admin/notifications/:id',
    },
    resend: {
      method: 'POST' as const,
      path: '/admin/notifications/:id/resend',
    },
  },
} as const



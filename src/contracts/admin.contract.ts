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
      method: 'PATCH' as const,
      path: '/admin/users/:id/status',
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
  },
  reviews: {
    pending: {
      method: 'GET' as const,
      path: '/admin/reviews/pending',
    },
    approve: {
      method: 'POST' as const,
      path: '/admin/reviews/:id/approve',
    },
    reject: {
      method: 'POST' as const,
      path: '/admin/reviews/:id/reject',
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
    resend: {
      method: 'POST' as const,
      path: '/admin/notifications/:id/resend',
    },
  },
} as const



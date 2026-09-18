/**
 * Admin API contracts
 * These define the structure of admin endpoints
 */
export const AdminContract = {
    dashboard: {
        stats: {
            method: 'GET',
            path: '/admin/dashboard/stats',
        },
    },
    users: {
        list: {
            method: 'GET',
            path: '/admin/users',
        },
        get: {
            method: 'GET',
            path: '/admin/users/:id',
        },
        updateStatus: {
            method: 'PUT',
            path: '/admin/users/:id/status',
        },
        updateVerification: {
            method: 'PUT',
            path: '/admin/users/:id/verification',
        },
        updateWhatsAppOptOut: {
            method: 'PUT',
            path: '/admin/users/:id/whatsapp-opt-out',
        },
    },
    requests: {
        list: {
            method: 'GET',
            path: '/admin/requests',
        },
        get: {
            method: 'GET',
            path: '/admin/requests/:id',
        },
    },
    professionals: {
        list: {
            method: 'GET',
            path: '/admin/professionals',
        },
        get: {
            method: 'GET',
            path: '/admin/professionals/:id',
        },
        updateStatus: {
            method: 'PUT',
            path: '/admin/professionals/:id/status',
        },
    },
    companies: {
        list: {
            method: 'GET',
            path: '/admin/companies',
        },
        get: {
            method: 'GET',
            path: '/admin/companies/:id',
        },
        updateStatus: {
            method: 'PUT',
            path: '/admin/companies/:id/status',
        },
    },
    // Review moderation lives under /reviews (ReviewsController), not /admin.
    reviews: {
        pending: {
            method: 'GET',
            path: '/reviews/admin/pending',
        },
        approve: {
            method: 'POST',
            path: '/reviews/:id/approve',
        },
        reject: {
            method: 'POST',
            path: '/reviews/:id/reject',
        },
    },
    notifications: {
        list: {
            method: 'GET',
            path: '/admin/notifications',
        },
        stats: {
            method: 'GET',
            path: '/admin/notifications/stats',
        },
        emailStatus: {
            method: 'GET',
            path: '/admin/notifications/email-status',
        },
        get: {
            method: 'GET',
            path: '/admin/notifications/:id',
        },
        resend: {
            method: 'POST',
            path: '/admin/notifications/:id/resend',
        },
    },
};
//# sourceMappingURL=admin.contract.js.map
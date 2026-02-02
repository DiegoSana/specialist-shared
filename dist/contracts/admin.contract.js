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
            method: 'PATCH',
            path: '/admin/users/:id/status',
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
    },
    reviews: {
        pending: {
            method: 'GET',
            path: '/admin/reviews/pending',
        },
        approve: {
            method: 'POST',
            path: '/admin/reviews/:id/approve',
        },
        reject: {
            method: 'POST',
            path: '/admin/reviews/:id/reject',
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
        resend: {
            method: 'POST',
            path: '/admin/notifications/:id/resend',
        },
    },
};
//# sourceMappingURL=admin.contract.js.map
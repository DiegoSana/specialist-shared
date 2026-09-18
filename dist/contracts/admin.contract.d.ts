/**
 * Admin API contracts
 * These define the structure of admin endpoints
 */
export declare const AdminContract: {
    readonly dashboard: {
        readonly stats: {
            readonly method: "GET";
            readonly path: "/admin/dashboard/stats";
        };
    };
    readonly users: {
        readonly list: {
            readonly method: "GET";
            readonly path: "/admin/users";
        };
        readonly get: {
            readonly method: "GET";
            readonly path: "/admin/users/:id";
        };
        readonly updateStatus: {
            readonly method: "PUT";
            readonly path: "/admin/users/:id/status";
        };
        readonly updateVerification: {
            readonly method: "PUT";
            readonly path: "/admin/users/:id/verification";
        };
        readonly updateWhatsAppOptOut: {
            readonly method: "PUT";
            readonly path: "/admin/users/:id/whatsapp-opt-out";
        };
    };
    readonly requests: {
        readonly list: {
            readonly method: "GET";
            readonly path: "/admin/requests";
        };
        readonly get: {
            readonly method: "GET";
            readonly path: "/admin/requests/:id";
        };
    };
    readonly professionals: {
        readonly list: {
            readonly method: "GET";
            readonly path: "/admin/professionals";
        };
        readonly get: {
            readonly method: "GET";
            readonly path: "/admin/professionals/:id";
        };
        readonly updateStatus: {
            readonly method: "PUT";
            readonly path: "/admin/professionals/:id/status";
        };
    };
    readonly companies: {
        readonly list: {
            readonly method: "GET";
            readonly path: "/admin/companies";
        };
        readonly get: {
            readonly method: "GET";
            readonly path: "/admin/companies/:id";
        };
        readonly updateStatus: {
            readonly method: "PUT";
            readonly path: "/admin/companies/:id/status";
        };
    };
    readonly reviews: {
        readonly pending: {
            readonly method: "GET";
            readonly path: "/reviews/admin/pending";
        };
        readonly approve: {
            readonly method: "POST";
            readonly path: "/reviews/:id/approve";
        };
        readonly reject: {
            readonly method: "POST";
            readonly path: "/reviews/:id/reject";
        };
    };
    readonly notifications: {
        readonly list: {
            readonly method: "GET";
            readonly path: "/admin/notifications";
        };
        readonly stats: {
            readonly method: "GET";
            readonly path: "/admin/notifications/stats";
        };
        readonly emailStatus: {
            readonly method: "GET";
            readonly path: "/admin/notifications/email-status";
        };
        readonly get: {
            readonly method: "GET";
            readonly path: "/admin/notifications/:id";
        };
        readonly resend: {
            readonly method: "POST";
            readonly path: "/admin/notifications/:id/resend";
        };
    };
};
//# sourceMappingURL=admin.contract.d.ts.map
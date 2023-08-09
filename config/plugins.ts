module.exports = ({ env }) => ({
    // ...
    email: {
        config: {
            provider: "nodemailer",
            providerOptions: {
                host: env("SMTP_HOST", "smtp.example.com"),
                port: env("SMTP_PORT", 587),
                auth: {
                    user: env("SMTP_USERNAME"),
                    pass: env("SMTP_PASSWORD"),
                },
                tls: {
                    rejectUnauthorized: false // Set to TRUE in production, and configure a valid SSL/TLS certificate
                }
                // ... any custom nodemailer options
            },
            settings: {
                defaultFrom: "hello@example.com",
                defaultReplyTo: "hello@example.com",
            },
        },
    },
    // ...
});

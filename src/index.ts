import _ from "lodash";

export default {
    /**
     * An asynchronous register function that runs before
     * your application is initialized.
     *
     * This gives you an opportunity to extend code.
     */
    register(/*{ strapi }*/) {},

    /**
     * An asynchronous bootstrap function that runs before
     * your application gets started.
     *
     * This gives you an opportunity to set up your data model,
     * run jobs, or perform some special logic.
     */
    bootstrap({ strapi }) {
        strapi.db.lifecycles.subscribe({
            models: ["plugin::users-permissions.user"],
            async afterCreate(event) {
                const { result: user } = event;

                const emailTemplate = {
                    subject: "Welcome <%= user.username %>",
                    text: `Welcome to mywebsite.com!
                    Your account is now linked with: <%= user.email %>.`,
                    html: `<h1>Welcome to mywebsite.com!</h1>
                    <p>Your account is now linked with: <%= user.email %>.<p>`,
                };

                try {
                    await strapi.plugins[
                        "email"
                    ].services.email.sendTemplatedEmail(
                        {
                            to: user.email,
                            from: "noreply@example.com",
                        },
                        emailTemplate,
                        {
                            user: _.pick(user, ["username", "email"]),
                        }
                    );
                } catch (error) {
                    console.log(error);
                }
            },
        });
    },
};

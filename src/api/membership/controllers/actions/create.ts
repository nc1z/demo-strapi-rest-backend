import _ from "lodash";

const create = async (ctx) => {
    const { user } = ctx.state;

    const membershipInformation = {
        fullName: user.username,
        gender: user.gender,
        emailAddress: user.email,
    };

    const result = await strapi.service("api::membership.membership").create({
        data: {
            ...membershipInformation,
            user: user.id,
        },
    });

    const emailTemplate = {
        subject: "Welcome <%= user.username %>",
        text: `Welcome to mywebsite.com!
        Your account is now linked with: <%= user.email %>.`,
        html: `<h1>Welcome to mywebsite.fr!</h1>
        <p>Your account is now linked with: <%= user.email %>.<p>`,
    };

    await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
            to: user.email,
            // from: is not specified, the defaultFrom is used.
        },
        emailTemplate,
        {
            user: _.pick(user, ["username", "email"]),
        }
    );

    return result
};

export default create;

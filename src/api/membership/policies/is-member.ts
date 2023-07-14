const utils = require("@strapi/utils")

const { NotFoundError } = utils.errors

export default async (policyContext, config, { strapi }) => {
    const userId = policyContext.state.user.id

    const query = {
        where: {
            user: {
                id: userId,
            },
        },
    };

    const membership = await strapi
        .query("api::membership.membership")
        .findOne(query)

    if (membership) {
        policyContext.state.membership = membership;
        return true
    }

    throw new NotFoundError("Membership does not exist")
}

const utils = require("@strapi/utils")

const { NotFoundError } = utils.errors

export default async (policyContext, config, { strapi }) => {
    const userId = policyContext.state.user.id

    if (userId) {
        return true
    }

    throw new NotFoundError("User does not exist")
}

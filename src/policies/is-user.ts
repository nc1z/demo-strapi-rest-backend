import utils from "@strapi/utils"

export default async (policyContext, config, { strapi }) => {
    const userId = policyContext.state.user.id

    if (userId) {
        return true
    }

    throw new utils.errors.NotFoundError("User does not exist")
}

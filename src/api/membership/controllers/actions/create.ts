const create = async (ctx) => {
    const { user } = ctx.state
    
    const membershipInformation = {
        fullName: user.username,
        gender: user.gender,
        emailAddress: user.email
    }

    return await strapi.service('api::membership.membership').create({
        data: {
            ...membershipInformation,
            user: user.id
        }
    })
}

export default create
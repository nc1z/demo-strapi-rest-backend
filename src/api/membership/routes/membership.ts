/**
 * membership router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::membership.membership", {
    only: ['create'],
    config: {
        create: {
            policies: [
                'global::is-user',
                'api::membership.is-not-member'
            ]
        }
    }
});

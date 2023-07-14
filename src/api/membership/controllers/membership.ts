/**
 * membership controller
 */

import { factories } from "@strapi/strapi"
import find from "./actions/find"
import create from "./actions/create"

export default factories.createCoreController(
    "api::membership.membership",
    ({ strapi }) => ({
        find,
        create,
    })
)

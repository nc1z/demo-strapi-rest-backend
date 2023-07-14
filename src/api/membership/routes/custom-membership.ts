export default {
    routes: [
        {
            method: 'GET',
            path: '/memberships',
            handler: 'membership.find',
            config: {
                policies: [
                    'global::is-user',
                    'api::membership.is-member'
                ]
            }
        }
    ]
}
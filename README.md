# Strapi REST backend

This repository contains a Strapi backend implementation using REST endpoints. It provides a straightforward and familiar RESTful API for managing and accessing resources.

Examples:
- REST endpoints
- Policies
- Welcome Email (User Creation lifecycle)

## Quickstart

### Register

For quick testing, user can register via the below method.

POST: `localhost:8080/api/auth/local/register`

Request body example

```json
{
    "username": "your-username",
    "email": "your-email@gmail.com",
    "password": "your-password",
    "gender": "your-gender"
}
```

### Login

POST: `localhost:8080/api/auth/local`

```json
{
    "identifier": "your-email@gmail.com",
    "password": "your-password"
}
```

### Next Steps

Once logged in or registered, please retrieve and store the `jwt` in the response object.
It will be required in the next steps.

## How to query

1. Once authenticated and logged in, retrieve JWT in return object
2. Set jwt as bearer token in authorization headers
3. Send a `GET` request to `localhost:8080/api/memberships` or `localhost:8080/api/reviews`
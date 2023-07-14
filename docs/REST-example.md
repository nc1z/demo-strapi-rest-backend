# REST endpoints

To test out the auth and membership endpoints

1. REGISTER

    POST: http://localhost:8080/api/auth/local/register

    Request body:

    ```json
    {
        "username": "test-user",
        "email": "your-email@gmail.com",
        "password": "your-password",
        "gender": "MALE"
    }
    ```

2. LOGIN

    POST: http://localhost:8080/api/auth/local

    Request body:

    ```json
    {
        "identifier": "your-email@gmail.com",
        "password": "your-password"
    }
    ```

3. CREATE MEMBERSHIP

Use the jwt from the response in steps 1 or 2 and place it as a bearer token

POST: http://localhost:8080/api/memberships

4. GET MEMBERSHIP

GET: http://localhost:8080/api/memberships
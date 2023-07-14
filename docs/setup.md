# Setup

1. Run the command

    ```bash
    $ npx create-strapi-app . --ts
    ```

2. Edit `.editorconfig`
3. Add data backup scripts

    ```json
    "data:export": "npm run strapi export -- -f data-export/strapi-export -k admin",
    "data:import": "npm run strapi import -- -k admin -f data-export/strapi-export.tar.gz.enc"
    ```
4. Create data-export folder

    ```bash
    $ mkdir data-export
    ```
5. (optional) Create new content-type via admin dashboard
6. (optional) Run data:export script
7. (optional) Change port in `.env`, then run `npm run build` to update
8. Run `npm install @strapi/utils` if you haven't already
9. Setup global policies in `src/policies`
10. Setup content-type policies in `src/api/your-api/policies`
11. Setup relational field (i.e. membership with user)
12. (FYI) import doesn't seem to work for @strapi/utils. Used require temporarily.
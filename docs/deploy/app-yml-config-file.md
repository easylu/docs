---
title: app.yml config file
---

The `app.yml` file is the main file used to configure Trotto.

## Format

The file looks like this:

```yaml
sessions_secret: strong_secret_strong_as_a_small_pony
postgres:
  url: "postgresql://username:password@host/database"
admins:
  - lisa@example.com
  - joe@example.com
```

### `sessions_secret` (required)

`sessions_secret` should be a strong secret, used to sign sessions and other tokens. You can generate this secret with,
for example:

```
python -c 'import os; import base64; print(base64.b64encode(os.urandom(32)))'
```

### `postgres` (required)

`postgres.url` should be the connection string for a Postgres 12 database. When you initially set up Trotto, this
should be an empty database. When the app starts up, it will update the database with the tables it needs.

### `admins` (optional)

An array of the email addresses of users who should have admin privileges for your Trotto instance.

### `layout` (optional)

The `layout` config can be used to customize the branding of the Trotto app as well as the layout of the
header and footer. A sample `layout` config:

```yaml
layout:
  palette:
    primary: "#4285f4"
    secondary: "#f4b400"
    success: "#0f9d58"
    error: "#db4437"
  page:
    title: "Acme Go Links"
    favicon: "https://www.example.com/favicon.png"
  header:
    title: "Acme Go Links"
    logo:
      url: "https://www.example.com/assets/logo.png"
      css:
        height: "40px"
    links:
      - directory
      - text: "Go Links Guide"
        url: "https://intranet.example.com/go-links"
  footer:
    showSourceLink: false
    links:
      - text: "Help Desk"
        url: "https://helpdesk.example.com"
      - text: "Feedback"
        url: "https://helpdesk.example.com/go-links-feedback"
```

* Most of the configuration is optional, and whatever config is provided will be merged into the default configuration.
  If `palette` is provided, the `primary` and `secondary` keys are required.
* In the `layout.header.links` array, the strings `directory` and `howItWorks` can be used to include the default
  `Directory` and `How It Works` links. The sign in/sign out link will always be included as the last link.
* The `layout.footer.showSourceLink` key can be used to include/exclude the icon linking to Trotto's GitHub repository.

## Location

The Trotto app can read the `app.yml` config either from `config/app.yml` or from a `TROTTO_CONFIG` environment variable
containing the base64-encoded file. One way to get the base64-encoded value is to use the `base64` command:

```text
base64 app.yml
```

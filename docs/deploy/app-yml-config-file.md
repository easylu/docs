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

## Location

The Trotto app can read the `app.yml` config either from `config/app.yml` or from a `TROTTO_CONFIG` environment variable
containing the base64-encoded file. One way to get the base64-encoded value is to use the `base64` command:

```text
base64 app.yml
```

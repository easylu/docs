---
title: Deploy with Docker
---

The Trotto [repo](https://github.com/trotto/go-links) includes a `Dockerfile` you can use to
build an image for Trotto with your configuration. The config for a Dockerized Trotto instance
consists of two files:

- `app.yml`, containing the main config
- `client_secrets.json`, a Google OAuth credentials file

These files are described below. Once you've put these files in `server/src/config/` in your clone of the repo, run
the `docker build` command to build a Trotto image containing your config. The startup command for the container will
run Trotto at `0.0.0.0:8000` inside the container or, if the `PORT` env var is set, at `0.0.0.0:${PORT}`. So for
example, if you're using the default port 8000 inside the container, you could publish the Trotto app to the host
machine's port 80 like so:

```
docker build -t trotto .
docker run -d -p 80:8000 trotto
``` 

The startup command will also update the Postgres database you use with Trotto if it's new or out-of-date.

If you have any trouble, don't hesitate to reach out to us at [help@trot.to](mailto:help@trot.to).

## app.yml

The `app.yml` file is the main file used to configure Trotto. See the documentation for
`app.yml` [here](/docs/deploy/app-yml-config-file).

## client_secrets.json

`client_secrets.json` is a Google OAuth credentials file. See [this page](/docs/deploy/creating-oauth-credentials) for
info on how to create OAuth credentials.

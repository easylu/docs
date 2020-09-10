---
title: Deploy to Heroku
---

Deploying to Heroku is the easiest way to get your own instance of Trotto up and running, in minutes. Heroku
provides a server and a database, and all you need to do is:

1. Generate a secret for signing cookies and tokens
2. Create Google OAuth credentials

Click the "Deploy to Heroku" button and follow the guide below to set up your instance.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/trotto/go-links) 

## Generating a strong secret

If you have Python installed, you can run the following to generate a strong secret:

```python
python -c 'import os; import base64; print(base64.b64encode(os.urandom(32)))'
```

Once you've generated a strong secret, paste it into the `FLASK_SECRET` section of the Heroku app
creation screen.

## Creating Google OAuth credentials

See [this page](/docs/deploy/creating-oauth-credentials) for info on how to create OAuth credentials.

Once you've created new credentials, download the JSON file for the credentials as shown
in [the screencast](https://www.screencast.com/t/q7wvIrHhqgS) and paste the JSON from the file into
the `GOOGLE_OAUTH_CLIENT_JSON` section of the Heroku app creation screen.

## Deploying

Once you've set the `FLASK_SECRET` and `GOOGLE_OAUTH_CLIENT_JSON` config vars on the app creation screen, click "Deploy
app", and your new Trotto instance will deploy and be ready for use.

If you have any trouble, don't hesitate to reach out to us at [help@trot.to](mailto:help@trot.to).

## Forking and automating deployment

You can fork the Trotto repo and set up your own deployment process in Heroku:

1. Create a public fork, or a private mirror as described below
2. Under the **Deploy** tab of the Heroku dashboard for your Trotto instance, connect the app to your fork/mirror
   and set up automatic deploys as described
   in [Heroku's docs](https://devcenter.heroku.com/articles/github-integration)
3. (optional) If you want to add additional config to your Trotto instance (such as a list of admins), create
   an `app.yml` config file  and set the base64-encoded `app.yml` file as the `TROTTO_CONFIG` environment variable as
   described in the [`app.yml` docs](/docs/deploy/app-yml-config-file)

### Creating a private repo

To set up a private repo mirroring the `trotto/go-links` repo, create a private repo (without any initial files)
and run the below git commands, substituting your repo in the `git remote add origin ...` command.

```shell script
git clone git@github.com:trotto/go-links.git
cd go-links
git remote rename origin upstream
git remote add origin git@github.com:YOUR_ORG/YOUR_REPO.git
git push origin
```

Your new repo will now mirror the `master` branch of `trotto/go-links`.

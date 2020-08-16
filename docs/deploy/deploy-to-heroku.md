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

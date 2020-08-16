---
title: Creating OAuth credentials
---

As documented [here](https://developers.google.com/identity/sign-in/web/sign-in#create_authorization_credentials), Google
OAuth credentials don't take long to create, but the process can be a bit confusing. We've created a screencast
showing the process for a new Google user here: https://www.screencast.com/t/q7wvIrHhqgS

As shown in the screencast, you may need to create a Google Cloud Platform project under which you'll create OAuth
credentials.

## Authorized redirect URI

When creating credentials, you'll need to add your Trotto instance's OAuth callback URL to the list
of "Authorized redirect URIs". For Heroku apps, the callback URL follows the
format: `https://APP_ID.herokuapp.com/_/auth/oauth2_callback`

For example, if your Heroku app's ID is `my-trotto`, the callback URL will
be `https://my-trotto.herokuapp.com/_/auth/oauth2_callback`.

## External vs. internal "user type"

In the "OAuth consent screen" section of the Google Cloud Platform interface, you have the option of setting "user type"
as either "external" or "internal". The type of "internal" will restrict login for your Trotto instance to only users
in your domain, which is typically what you want if you're setting up Trotto for your company.

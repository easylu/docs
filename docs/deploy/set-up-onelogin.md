---
title: Set up OneLogin
---

With Trotto's Enterprise plan, you have access to Trotto's OneLogin integration in the OneLogin App Catalog. The
integration lets you use OneLogin as your identity provider to authenticate and provision/deprovision users in Trotto.

## SAML

To set up SAML,

1. Log into your OneLogin account as an administrator
2. Click **Administration** in the top navigation to go to the admin panel
3. Go to **Applications** > **Applications**
4. Click the **Add App** button
5. Search for "Trotto go links" and select the Trotto app
6. Add the app as an organization-wide app
7. Click the **SSO** tab in the left sidebar
8. Copy the listed **Issuer URL**
9. Send an email to [help@trot.to](mailto:help@trot.to) requesting we enable SAML 2.0 for your organization. Include
   the **Issuer URL** you copied in your email.

Once we receive your email, we'll set up SAML for your organization within a day.

## Provisioning

### 1. Contact the Trotto team

Send an email to [help@trot.to](mailto:help@trot.to) requesting an API token for Trotto's SCIM API. In the email,
tell us what secure mechanism you would like to use to receive the API token for your organization, such as a
public encryption key we can use to encrypt your API token before sending over email, or Keybase.

Once we receive your email, we'll send you an API key using your preferred secure method.

### 2. Configure automatic provisioning in OneLogin

Once you've received an API token from the Trotto team,

1. Open the Trotto application in OneLogin
2. Click the **Configuration** tab in the left sidebar
3. Enter the API token in the **SCIM Bearer Token** text box
4. Click the **Enable** button
5. Click the **Provisioning** tab in the left sidebar
6. Check the **Enable provisioning** checkbox
7. Click **Save**

You can now provision and deprovision Trotto users through OneLogin.

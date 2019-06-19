// use dev as default so it points there when we develop locally
export const OKTA_CLIENT_ID = process.env.OKTA_CLIENT_ID || '0oagmmgu5i6dlxxga0h7';
export const OKTA_ISSUER_URL = process.env.OKTA_ISSUER_URL || 'https://atg.oktapreview.com/oauth2/aush1xnhdhBck5mS20h7';
export const IMPLICIT_CALLBACK_URL = '/implicit/callback';
export const OKTA_REDIRECT_URL = `${window.location.origin}${IMPLICIT_CALLBACK_URL}`;
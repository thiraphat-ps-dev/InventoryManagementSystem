export const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const host = 'http://localhost:8000';

export const clientId = 'dIWOhDY4e9flgRF874yLFi5lEMye01qtgwf44g4U';
export const clientSecret = 'F0nSkT978BmNJE7oczq9bsh3ds6XPcKBM1HMR2VPxPfqh3NPoFGWa1lAUe1VJgAfKMrlkFAuE2dg15dJhe9aPSDIdirrf80rSa4JHkPB3Ucx2V8h20Xqce8d5vYCTdRX';

export const api = {
  get_token: `${host}/o/token/`,
  get_user: `${host}/api/user`,
  get_items: `${host}/items/`,
};

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const host = 'http://localhost:8000';

export const clientId = 'nPzYFm9uxERjBnLiDxMPVdfySv0D4EduimGzmCyM';
export const clientSecret = 'X92pq3ji4CknSn2lUoeo8rksefGqlcX0OSG5ql4djUVuZ90NCe8SJD2Gb4rD5l6gmiKGMQYwK4v674HSGL07NPAAciZ0eJlCr0PaFG4PBixcvlVtWzxaY6PNkITfW0Hb';

export const api = {
  get_token: `${host}/o/token/`,
  get_user: `${host}/api/user`,
  get_items: `${host}/items/`,
};

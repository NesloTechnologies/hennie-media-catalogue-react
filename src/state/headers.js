const HEADERS = {
  Authorization: `Bearer ${document.cookie.substring(document.cookie.indexOf('auth_token=') + 11)}`
};

export const setCookie = (data) => {
  document.cookie = `auth_token=${data}`;
};

export default HEADERS;

const HEADERS = {
  Authorization: `Bearer ${document.cookie.substring(document.cookie.indexOf('auth_token=') + 11)}`
};

export default HEADERS;

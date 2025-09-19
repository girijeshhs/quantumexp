export const API_BASE_URL = (process.env.REACT_APP_API_URL || '').trim();

export const apiUrl = (path) => {
  const base = API_BASE_URL.replace(/\/+$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}` || p;
};

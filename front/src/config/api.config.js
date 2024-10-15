export const SERVER_URL = import.meta.env.VITE_PUBLIC_SERVER_URL;
export const API_URL = `${SERVER_URL}/api`;

export const getAuthUrl = (string) => `/auth${string}`;
export const getCarUrl = (string) => `/cars${string}`;
export const getBookUrl = (string) => `/books${string}`;
export const getPhotoUrl = (string) => `/photo${string}`;

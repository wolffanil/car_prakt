export const getAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken || null;
};

export const saveTokenStorage = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
};

export const removeFromStorage = () => {
  localStorage.removeItem("accessToken");
};

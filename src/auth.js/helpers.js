export const isAuthenticated = () => {
  const jwt = localStorage.getItem("infos");
  if (jwt) {
    return JSON.parse(jwt);
  }
  return false;
};

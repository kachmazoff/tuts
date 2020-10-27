import { TOKEN } from "../../config/localStorageData";

export const saveToken = async (token) => {
  await localStorage.setItem(TOKEN, token);
};

export const deleteToken = async () => {
  await localStorage.removeItem(TOKEN);
};

export const loadToken = async () => {
  const token = await localStorage.getItem(TOKEN);
  console.log("token", token);
  return token;
};

export const isLoggedIn = async () => {
  const token = await loadToken();
  return Boolean(token);
};

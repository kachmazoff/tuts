import axios from "axios";
import { TOKEN } from "../config/localStorageData";

/**
 * @typedef { import('axios').AxiosRequestConfig } AxiosRequestConfig
 */

/**
 * @template T
 * @typedef { import('axios').AxiosResponse<T> } AxiosResponse
 */

/**
 * axios wrapper
 */
class Axios {
  /**
   * Конструктор.
   */
  constructor() {
    this.axios = axios.create();
    this.axios.interceptors.response.use(
      (value) => {
        const data = value.data;

        // TODO: сделать нормальную обработку ошибок
        // if (
        //   typeof data === "object" &&
        //   (!data.error_code || data.error_code === 0)
        // ) {
        return value;
        // }

        return Promise.reject({ message: data.error });
      },
      (error) => {
        return Promise.reject({ message: error });
      }
    );

    const token = localStorage.getItem(TOKEN);
    if (token) {
      this.setAuthorizationHeader(token);
    }
  }

  /**
   * Метод для получения ресурса.
   * @param { string } url адрес запроса.
   * @param { AxiosRequestConfig } [config] параметры запроса.
   * @returns { Promise<AxiosResponse<any>> }
   */
  get(url, config) {
    return this.axios.get(url, config);
  }

  /**
   * Метод для создания ресурса.
   * @param { string } url адрес запроса.
   * @param { any } [data] тело запроса.
   * @param { AxiosRequestConfig } [config] параметры запроса.
   * @returns { Promise<AxiosResponse<any>> }
   */
  post(url, data, config) {
    return this.axios.post(url, data, config);
  }

  /**
   * Метод для обновления ресурса.
   * @param { string } url адрес запроса.
   * @param { any } data тело запроса.
   * @param { AxiosRequestConfig } [config] параметры запроса.
   * @returns { Promise<AxiosResponse<any>> }
   */
  put(url, data, config) {
    return this.axios.put(url, data, config);
  }

  /**
   * Метод для удаления ресурса.
   * Метод для получения ресурса.
   * @param { string } url адрес запроса.
   * @param { AxiosRequestConfig } [config] параметры запроса.
   * @returns { Promise<AxiosResponse<any>> }
   */
  delete(url, config) {
    return this.axios.delete(url, config);
  }

  /**
   * Метод для частичного изменения ресурса.
   * @param { string } url адрес запроса.
   * @param { any } data тело запроса.
   * @param { AxiosRequestConfig } [config] параметры запроса.
   * @returns { Promise<AxiosResponse<any>> }
   */
  patch(url, data, config) {
    return this.axios.patch(url, data, config);
  }

  /**
   * Установить заголовок Authorization.
   * @param { string } token токен аутентификации.
   */
  setAuthorizationHeader(token) {
    this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  /**
   * Удалить заголовок Authorization.
   */
  clearAuthorizationHeader() {
    this.axios.defaults.headers.common.Authorization = "";
  }
}

const customAxios = new Axios();

export { customAxios as axios };

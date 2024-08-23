import configs from "@/config";
import { ACCESS_TOKEN, RouteURL, STATUS_CODE } from "@/constants";
import axios from "axios";
import Cookies from 'js-cookie';
const axiosInstance = axios.create({
    timeout: 3 * 60 * 1000,
    baseURL: configs.API_DOMAIN,
});
axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${Cookies.get(ACCESS_TOKEN)}`;
      return config;
    },
    (error) => console.log(error)
);

export const logout = () => {
    Cookies.set(ACCESS_TOKEN, '');
    window.location.href = RouteURL.AUTH.LOGIN;
};

axiosInstance.interceptors.response.use(
    (response) => response,
    (error: any) => {
      if (Object.values(STATUS_CODE).indexOf(error.response.status) > -1) {
        const isNotAutho = error.response.status === STATUS_CODE.HTTP_UNAUTHORIZED
        if(isNotAutho) {
          // call API logout to clear cookies from server
          logout();
        }
        return Promise.reject(error);
      }
    }
  );
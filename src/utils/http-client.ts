const https = require('https');
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import SessionNames from '../constants/session-names';
import { getCookie } from './cookie';

class AxiosHttpClient {
  service: AxiosInstance;
  constructor() {
    const serviceInstance = axios.create({
      baseURL: process.env.BASE_API_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      params: {
        api_key: process.env.API_KEY,
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });

    serviceInstance.interceptors.request.use(
      (config) => {
        const authCookie = getCookie(SessionNames.AUTH);
        const _config = { ...config };
        if (!_config.headers) _config.headers = {};
        if (!_config.headers.Authorization && authCookie) {
          _config.headers.Authorization = `Bearer ${authCookie}`;
        }
        return _config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    serviceInstance.interceptors.response.use(
      (response: AxiosResponse<any>) => {
        return response;
      },
      (error: AxiosError<any>) => {
        return Promise.reject(error);
      }
    );

    this.service = serviceInstance;
  }

  get(path: string, config?: any) {
    return this.service.get(path, config);
  }

  post(path: string, data?: any, config?: any) {
    return this.service.post(path, data, config);
  }

  put(path: string, data?: any, config?: any) {
    return this.service.put(path, data, config);
  }

  delete(path: string, config?: any) {
    return this.service.delete(path, config);
  }
}

const HttpClient = new AxiosHttpClient();
Object.freeze(HttpClient);

export default HttpClient;

import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export enum ServiceState {
  Idle = 'IDLE',
  Done = 'DONE',
  Pending = 'PENDING',
  Error = 'ERROR',
}

enum RequestMethods {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Patch = 'patch',
  Delete = 'delete',
}

export type RequestKnownError = {
  message: string;
  code: number;
};

const defaultRequestConfig: Partial<AxiosRequestConfig> = {
  // timeout: 5000,
  headers: {
    common: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
};

export default class BibleService {
  public instance: AxiosInstance;

  constructor(config: Partial<AxiosRequestConfig>) {
    // invariant(config.baseURL, 'Please pass the API base url!');

    this.instance = Axios.create({ ...defaultRequestConfig, ...config });
  }

  public async request<T>(config: AxiosRequestConfig = {}): Promise<T> {
    // invariant(config.url, 'Please pass the API endpoint url!');
    // invariant(config.method, 'Please pass the request method!');

    // logger.debug(config.method!.toUpperCase(), config.url, omit(config, ['url', 'method']));

    try {
      const response: AxiosResponse<T> = await this.instance.request<T>(config);

      return this.extractData(response);
    } catch (error) {
      throw this.handleKnownErrors(error, config);
    }
  }

  public extractData = <T>(response: AxiosResponse<T>): T => {
    const { data } = response;

    return data;
  };

  public handleKnownErrors(error: AxiosError, config: AxiosRequestConfig = {}): RequestKnownError {
    if (error.response) {
      const { data, status } = error.response;

      return {
        message: (data && data.message) || 'Response request failed',
        code: status,
      };
    }

    if (error.request) {
      return {
        message: `Request to '${config.url}' failed before sending: ${error.code} - ${
          error.message
        }`,
        code: 500,
      };
    }

    // Handle custom errors and translate using the code
    return {
      message: error.message || 'Request failed',
      code: parseInt(error.code, 10),
    };
  }

  public get<T>(url: string, opts: AxiosRequestConfig = {}): Promise<T> {
    return this.request({
      method: RequestMethods.Get,
      url,
      ...opts,
    });
  }

  public post<T>(url: string, data: object, opts: AxiosRequestConfig = {}): Promise<T> {
    return this.request({
      method: RequestMethods.Post,
      url,
      data,
      ...opts,
    });
  }

  public put<T>(url: string, data: object, opts: AxiosRequestConfig = {}): Promise<T> {
    return this.request({
      method: RequestMethods.Put,
      url,
      data,
      ...opts,
    });
  }

  public patch<T>(url: string, data: object, opts: AxiosRequestConfig = {}): Promise<T> {
    return this.request({
      method: RequestMethods.Patch,
      url,
      data,
      ...opts,
    });
  }

  public delete<T>(url: string, opts: AxiosRequestConfig = {}): Promise<T> {
    return this.request({
      method: RequestMethods.Delete,
      url,
      ...opts,
    });
  }
}

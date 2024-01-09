/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class AxiosFetcher {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });

    // Optionally, add request and response interceptors
    this.axiosInstance.interceptors.request.use(this.handleRequest as any);
    this.axiosInstance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  }

  private async handleRequest(
    config: AxiosRequestConfig
  ): Promise<AxiosRequestConfig<any>> {
    // const authAccesstoken = getAccessToken();

    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    };

    // Add Bearer Token header
    // if (authAccesstoken) {
    //   config!.headers!.Authorization = `Bearer ${authAccesstoken}`;
    //   // config!.headers!.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsInVzZXJuYW1lIjoicm9vdCIsImVtYWlsIjoidHJ1b25nbmhhdGFuaGhAZ21haWwuY29tIiwicm9sZSI6MCwiaWF0IjoxNzAyNTQ4OTQ0LCJleHAiOjE3MDI1NTI1NDR9.4i0Ji8PP3tQ_tMURSXV0kReppmCLI8venYMIuNUbNm8`;
    // }

    // Add other headers if needed
    // config.headers['Header-Name'] = 'Header-Value';
    // console.log({ config }); // DEV
    return config;
  }

  private async handleResponse(
    response: AxiosResponse & Partial<any>
  ): Promise<AxiosResponse<any, any>> {
    // console.log({ response }); // DEV
    return response;
  }

  private async handleError(error: any): Promise<any> {
    return Promise.reject(error);
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance
      .get<T>(url, config)
      .then((response) => response.data);
  }

  public post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.axiosInstance
      .post<T>(url, data, config)
      .then((response) => response.data);
  }

  public put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.axiosInstance
      .put<T>(url, data, config)
      .then((response) => response.data);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance
      .delete<T>(url, config)
      .then((response) => response.data);
  }

  // Add other methods (PATCH, etc.) as needed
  public patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.axiosInstance
      .patch<T>(url, data, config)
      .then((response) => response.data);
  }
}

export default AxiosFetcher;

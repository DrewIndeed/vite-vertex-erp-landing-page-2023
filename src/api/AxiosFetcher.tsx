/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
// import { ENDPOINTS } from "./useAxiosSWR";

// const domain = import.meta.env.DEV
//   ? import.meta.env.VITE_DEV_DOMAIN! || ""
//   : import.meta.env.VITE_PRO_DOMAIN! || "";

// let triggeredRoleChecked = false;

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

    // This one is used to bypass ngrok consent screen
    config.headers = {
      ...config.headers,
      "ngrok-skip-browser-warning": "69420",
      "Access-Control-Allow-Origin": "*",
    };

    // Add Bearer Token header
    // if (authAccesstoken) {
    //   config!.headers!.Authorization = `Bearer ${authAccesstoken}`;
    //   // config!.headers!.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsInVzZXJuYW1lIjoicm9vdCIsImVtYWlsIjoidHJ1b25nbmhhdGFuaGhAZ21haWwuY29tIiwicm9sZSI6MCwiaWF0IjoxNzAyNTQ4OTQ0LCJleHAiOjE3MDI1NTI1NDR9.4i0Ji8PP3tQ_tMURSXV0kReppmCLI8venYMIuNUbNm8`;
    // }

    // [IMPORTANT] check user role changed
    // const checkRole = async () => {
    //   const loginInfos = getLoginInfos();
    //   // console.log({ loginInfos }); // DEV
    //   if (loginInfos.isAuthenticated && location.pathname.includes("/xadmin")) {
    //     const userId = loginInfos.id;
    //     const userRole = loginInfos.role;
    //     try {
    //       const response: any = await axios.get(
    //         `${domain}${ENDPOINTS.findAccount}/${userId}`,
    //         { headers: { "ngrok-skip-browser-warning": "69420" } }
    //       );
    //       // console.log({ userRole, data: response.data.data.role }); // DEV
    //       if (userRole !== response.data.data.role && !triggeredRoleChecked) {
    //         triggeredRoleChecked = true;
    //         message.error(
    //           "Quyền của bạn đã được thay đổi. Vui lòng đăng nhập lại."
    //         );
    //         clearTokens();
    //         setTimeout(() => {
    //           location.reload();
    //         }, 1000);
    //       }
    //     } catch (error) {
    //       console.log({ error });
    //       message.error(
    //         "Không thể tiến hành xác thực role của bạn bằng ID. Sẽ đăng xuất trong giây lát."
    //       );
    //       clearTokens();
    //       setTimeout(() => {
    //         location.reload();
    //       }, 1000);
    //     }
    //   }
    // };
    // checkRole();

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
    // Handle errors (e.g., logging or custom error messaging)
    // const refreshTokenAndRetry = async (
    //   response: AxiosResponse
    // ): Promise<any> => {
    //   // Perform token refresh logic here
    //   const refreshToken = getRefreshToken(); // Retrieve the refresh token
    //   // console.log({ here: refreshToken }); // DEV
    //   const config = response.config; // Retrieve the original request config
    //   try {
    //     const refreshResponse: AxiosResponse = await axios.post(
    //       `${domain}${ENDPOINTS.refreshToken}`,
    //       {},
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //           // "Access-Control-Allow-Origin": "*",
    //           Authorization: `Bearer ${refreshToken}`,
    //           "ngrok-skip-browser-warning": "69420",
    //         },
    //       }
    //     );

    //     // Update the access token in your authentication store or wherever you manage it
    //     const newAccessToken = await refreshResponse.data.access_token;
    //     // const newRefreshToken = await refreshResponse.data.refresh_token;
    //     // console.log({ newAccessToken, newRefreshToken }); // DEV
    //     setAccessToken(newAccessToken);
    //     // setRefreshToken(newRefreshToken);

    //     // Update the Authorization header in the original request config
    //     config.headers.Authorization = `Bearer ${newAccessToken}`;

    //     // Retry the original request with the updated access token
    //     // message here
    //     setTimeout(() => {
    //       message.success("Bạn sẽ được chuyển tiếp ngay bây giờ.");
    //       axios(config).then(() => {
    //         setTimeout(() => {
    //           location.reload();
    //         }, 1000);
    //       });
    //     }, 2000);

    //     // NO RETURN HERE BECAUSE ALREADY REFRESH THE BROWSER
    //   } catch (error) {
    //     // Handle token refresh error (e.g., logout the user, redirect to login page, etc.)
    //     // Can also reject the Promise here to propagate the error to the caller
    //     // message here
    //     message.error("Lỗi nội bộ về xác thực. Đang đăng xuất ...");
    //     console.error("Lỗi nội bộ về xác thực:", error);
    //     clearTokens();

    //     // NO RETURN HERE BECAUSE ALREADY LOG OUT
    //     // THIS ALSO MEANS REFRESH TOKEN DOES NOT WORK
    //   }
    // };

    // console.log({ error }); // DEV
    // if (
    //   !error.response.data.success &&
    //   error.response.data.error === "jwt expired"
    // ) {
    //   // message here
    //   // message.warning("Token hết hạn. Đang làm mới và thử lại ...");
    //   setTimeout(() => {
    //     message.warning("Đang xử lí lỗi nội bộ, xin chờ trong giây lát.");
    //   }, 500);
    //   refreshTokenAndRetry(error.response);
    //   return;
    // }

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

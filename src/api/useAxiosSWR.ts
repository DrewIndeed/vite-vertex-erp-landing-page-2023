/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from "swr";
import AxiosFetcher from "./AxiosFetcher";
import { VITE_BE_DOMAIN, VITE_LAMBDA_URL } from "@constants/index";

// ENDPOINTS keys
export const ENDPOINTS = {
  // auth
  login: "/auth/login",
  signup: "/auth/signup",
  configSite: "/server/config-site",
  registerTrial: "/user/trial",
  registerPremium: "/user/premium",
};
// Instance of AxiosFetcher
// console.log({ meta_vite: import.meta.env });
export const fetcher = new AxiosFetcher(VITE_BE_DOMAIN);
export const serverFetcher = new AxiosFetcher(VITE_LAMBDA_URL);

// config for swr
const SWRoptions = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
  loadingTimeout: 3000,
};

// main hook content
const useAxiosSWR = <Data, Error = any>(
  url: string,
  options?: Record<string, any>
) => {
  const { data, error, mutate } = useSWR<Data, Error>(
    [url, options],
    () => fetcher.get(url, options),
    {
      ...SWRoptions,
      ...options?.forSWR,
      refreshInterval: options?.refreshInterval || 0,
    }
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    mutate,
  };
};

export default useAxiosSWR;

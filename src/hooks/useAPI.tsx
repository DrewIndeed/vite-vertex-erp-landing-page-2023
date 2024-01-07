/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const useAPI = (endpoint: string, options: Record<string, any>) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BE_DOMAIN}/${endpoint}`,
          options
        );
        if (!response.ok) {
          throw new Error("Request failed");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, options]);

  return { data, loading, error };
};

export default useAPI;

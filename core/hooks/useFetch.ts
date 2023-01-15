import { useState } from "react";

type FetchState = {
  isLoading?: boolean;
  isError?: boolean;
};

const useFetch = <T>(
  url: string,
  method: string = "GET",
  headers: HeadersInit = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  }
) => {
  const [fetchData, setFetchData] = useState<FetchState>();

  const runFetch = async (body?: Object) => {
    try {
      setFetchData({ isLoading: true, isError: false });

      const res = await fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      });

      const data = await res.json();

      setFetchData({
        isLoading: false,
        isError: false,
      });

      return data as T;
    } catch (err: any) {
      console.error(err);
      setFetchData({
        isLoading: false,
        isError: true,
      });
    }
  };

  return { ...fetchData, runFetch };
};

export default useFetch;

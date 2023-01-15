import { SpotifyApiResponse, SpotifyNowPlaying } from "@/utils/types";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useSpotify = () => {
  const [imPlaying, setImPlaying] = useState<SpotifyNowPlaying | undefined>();
  const { runFetch, isLoading } = useFetch<SpotifyApiResponse>(
    "/api/spotify",
    "POST"
  );

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const res = await runFetch();

      if (res?.success) {
        setImPlaying(res.data);
      }
    };

    fetchNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { imPlaying, isLoading };
};

export default useSpotify;

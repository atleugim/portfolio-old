import useSpotify from "@/core/hooks/useSpotify";
import { joinArray } from "@/core/utils/helpers";
import { SpotifyNowPlaying } from "@/core/utils/types";
import ExternalLink from "../shared/ExternalLink";
import SpotifyIcon from "../shared/Icons/Spotify";

type SpotifyProps = {
  data?: SpotifyNowPlaying;
};

const Spotify = () => {
  const { imPlaying: spotify, isLoading } = useSpotify();

  if (isLoading) return null;

  return (
    <div className="flex justify-center font-mono text-sm">
      {spotify?.is_playing ? <Playing data={spotify} /> : <NotPlaying />}
    </div>
  );
};

export default Spotify;

const Playing = ({ data }: SpotifyProps) => {
  return (
    <div className="flex w-full justify-center space-x-2 text-center">
      <SpotifyIcon />{" "}
      <ExternalLink
        href={data!.item.external_urls.spotify}
        name={`${joinArray(data!.item.artists.map((a) => a.name))} - ${
          data!.item.name
        }`}
      />
    </div>
  );
};

const NotPlaying = () => {
  return (
    <div className="flex w-full justify-center space-x-2 text-center">
      <SpotifyIcon /> <span>Not playing</span>
    </div>
  );
};

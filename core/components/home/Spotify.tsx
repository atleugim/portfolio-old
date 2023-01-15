import useSpotify from "@/hooks/useSpotify";
import { joinArray } from "@/utils/helpers";
import { SpotifyNowPlaying } from "@/utils/types";
import ExternalLink from "../shared/ExternalLink";
import SpotifyIcon from "../shared/Icons/Spotify";
import Wrapper from "../shared/Wrapper";

type SpotifyProps = {
  data?: SpotifyNowPlaying;
};

const Spotify = () => {
  const { imPlaying, isLoading } = useSpotify();

  if (isLoading || !imPlaying) return null;

  return (
    <Wrapper className="justify-center font-mono text-sm">
      {imPlaying?.is_playing ? <Playing data={imPlaying} /> : <NotPlaying />}
    </Wrapper>
  );
};

export default Spotify;

const Playing = ({ data }: SpotifyProps) => {
  return (
    <div className="flex items-center space-x-2">
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
    <div className="flex items-center space-x-2">
      <SpotifyIcon /> <span>Not playing</span>
    </div>
  );
};

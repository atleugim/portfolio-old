import { NextApiRequest, NextApiResponse } from "next";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

const getAccessToken = async () => {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken!,
    }),
  });

  return response.json();
};

const getNowPlaying = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const { access_token } = await getAccessToken();

    if (!access_token) {
      throw new Error("No access token");
    }

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const data = await response.json();

    if (data) {
      res.statusCode = 200;
      return res.end(
        JSON.stringify({
          success: true,
          data: data,
        })
      );
    }

    throw new Error("Something went wrong");
  } catch (err) {
    const message = getErrorMessage(err);

    res.statusCode = 500;
    return res.end(
      JSON.stringify({
        success: false,
        message,
      })
    );
  }
};

export default getNowPlaying;

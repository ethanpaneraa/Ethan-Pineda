import { NextResponse } from "next/server";

async function getAccessToken() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!client_id || !client_secret || !refresh_token) {
    throw new Error("Missing Spotify credentials");
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${client_id}:${client_secret}`
      ).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
  });

  const data = await response.json();
  return data.access_token;
}

export async function GET() {
  try {
    const access_token = await getAccessToken();

    const [currentResponse, topTracksResponse, topArtistsResponse] =
      await Promise.all([
        fetch("https://api.spotify.com/v1/me/player/currently-playing", {
          headers: { Authorization: `Bearer ${access_token}` },
          next: { revalidate: 30 },
        }),
        fetch(
          "https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term",
          {
            headers: { Authorization: `Bearer ${access_token}` },
            next: { revalidate: 3600 },
          }
        ),
        fetch(
          "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=short_term",
          {
            headers: { Authorization: `Bearer ${access_token}` },
            next: { revalidate: 3600 },
          }
        ),
      ]);

    let currentTrack = null;
    if (currentResponse.status === 204 || !currentResponse.ok) {
      const recentResponse = await fetch(
        "https://api.spotify.com/v1/me/player/recently-played?limit=1",
        {
          headers: { Authorization: `Bearer ${access_token}` },
          next: { revalidate: 30 },
        }
      );
      if (recentResponse.ok) {
        const recentData = await recentResponse.json();
        currentTrack = {
          is_playing: false,
          item: recentData.items[0]?.track,
        };
      }
    } else {
      currentTrack = await currentResponse.json();
    }

    const topTracks = await topTracksResponse.json();
    const topArtists = await topArtistsResponse.json();

    return NextResponse.json({
      current: currentTrack,
      topTracks: topTracks.items,
      topArtists: topArtists.items,
    });
  } catch (error) {
    console.error("Error in Spotify route:", error);
    return NextResponse.json(
      { error: "Failed to fetch Spotify data" },
      { status: 500 }
    );
  }
}

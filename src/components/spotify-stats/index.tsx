import { SpotifyStatsClient } from "@/components/spotify-stats/client";

interface Artist {
  name: string;
  external_urls: {
    spotify: string;
  };
  images: Array<{ url: string }>;
}

interface Track {
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  external_urls: {
    spotify: string;
  };
}

interface SpotifyData {
  current: {
    is_playing: boolean;
    item: Track;
  };
  topTracks: Track[];
  topArtists: Artist[];
}

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

async function fetchSpotifyData(): Promise<SpotifyData | null> {
  try {
    const access_token = await getAccessToken();

    const [currentResponse, topTracksResponse, topArtistsResponse] =
      await Promise.all([
        fetch("https://api.spotify.com/v1/me/player/currently-playing", {
          headers: { Authorization: `Bearer ${access_token}` },
          next: { revalidate: 30 },
        }),
        fetch(
          "https://api.spotify.com/v1/me/top/tracks?limit=3&time_range=short_term",
          {
            headers: { Authorization: `Bearer ${access_token}` },
            next: { revalidate: 3600 },
          }
        ),
        fetch(
          "https://api.spotify.com/v1/me/top/artists?limit=3&time_range=short_term",
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
          next: { revalidate: 30000 },
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

    return {
      current: currentTrack,
      topTracks: topTracks.items,
      topArtists: topArtists.items,
    };
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    return null;
  }
}

export async function SpotifyStats() {
  const initialData = await fetchSpotifyData();

  return <SpotifyStatsClient initialData={initialData} />;
}

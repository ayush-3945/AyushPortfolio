// Spotify Live Real-Time Integration Service
const CLIENT_ID = '67e212e5802c43cc96d2c552d0f2d99c';
const CLIENT_SECRET = 'eec1a75b09af474a88fe9fd2009e3753';
const REFRESH_TOKEN = 'AQDS3J-N8y401n7x9vRh3MfrBmV7lTgTKslC84D9D0j3bFsoV_CydBDCUuf71sTfaHPzt6g3nu1jYJO_A49fQmVncLw8_-rMNFjjkdXAXe2i0EqXuIRrNgPm0m61YSEdESM';

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

let cachedAccessToken = null;
let tokenExpiresAt = 0;

async function getAccessToken() {
  const now = Date.now();
  if (cachedAccessToken && now < tokenExpiresAt) {
    return cachedAccessToken;
  }

  try {
    const basicAuth = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN,
      }),
    });

    const data = await response.json();
    if (data.access_token) {
      cachedAccessToken = data.access_token;
      tokenExpiresAt = now + (data.expires_in - 60) * 1000;
      return cachedAccessToken;
    }
  } catch (error) {
    console.warn('Failed to refresh Spotify access token:', error);
  }
  return null;
}

export async function getLiveSpotifyStatus() {
  const token = await getAccessToken();
  if (!token) return null;

  try {
    // 1. Try currently playing
    const res = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.status === 200) {
      const data = await res.json();
      if (data && data.item) {
        return {
          isPlaying: data.is_playing,
          title: data.item.name,
          artist: data.item.artists.map((a) => a.name).join(', '),
          album: data.item.album.name,
          albumArt: data.item.album.images?.[0]?.url,
          songUrl: data.item.external_urls?.spotify,
          statusLabel: data.is_playing ? 'NOW PLAYING' : 'PAUSED',
          isLive: true,
        };
      }
    }

    // 2. If nothing currently playing, fetch recently played
    const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (recentRes.status === 200) {
      const recentData = await recentRes.json();
      const track = recentData.items?.[0]?.track;
      if (track) {
        return {
          isPlaying: false,
          title: track.name,
          artist: track.artists.map((a) => a.name).join(', '),
          album: track.album.name,
          albumArt: track.album.images?.[0]?.url,
          songUrl: track.external_urls?.spotify,
          statusLabel: 'LAST PLAYED',
          isLive: true,
        };
      }
    }
  } catch (err) {
    console.warn('Spotify live status fetch failed:', err);
  }

  return null;
}

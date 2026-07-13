export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  liveBroadcastContent: "live" | "upcoming" | "none";
}

const CHANNEL_HANDLE = "@52kskew";
const API_BASE = "https://www.googleapis.com/youtube/v3";

async function getChannelId(apiKey: string): Promise<string | null> {
  const url = `${API_BASE}/channels?part=id&forHandle=${CHANNEL_HANDLE}&key=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  const data = await res.json();
  return data.items?.[0]?.id ?? null;
}

export async function fetchChannelStreams(maxResults = 12): Promise<{
  live: YouTubeVideo | null;
  streams: YouTubeVideo[];
}> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    return { live: null, streams: [] };
  }

  try {
    const channelId = await getChannelId(apiKey);
    if (!channelId) return { live: null, streams: [] };

    const [liveRes, pastRes] = await Promise.all([
      fetch(
        `${API_BASE}/search?part=snippet&channelId=${channelId}&type=video&eventType=live&maxResults=1&key=${apiKey}`,
        { next: { revalidate: 60 } },
      ),
      fetch(
        `${API_BASE}/search?part=snippet&channelId=${channelId}&type=video&eventType=completed&order=date&maxResults=${maxResults}&key=${apiKey}`,
        { next: { revalidate: 300 } },
      ),
    ]);

    let live: YouTubeVideo | null = null;
    if (liveRes.ok) {
      const liveData = await liveRes.json();
      const item = liveData.items?.[0];
      if (item) {
        live = {
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails?.high?.url ?? item.snippet.thumbnails?.medium?.url ?? "",
          publishedAt: item.snippet.publishedAt,
          liveBroadcastContent: "live",
        };
      }
    }

    const streams: YouTubeVideo[] = [];
    if (pastRes.ok) {
      const pastData = await pastRes.json();
      for (const item of pastData.items ?? []) {
        streams.push({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails?.high?.url ?? item.snippet.thumbnails?.medium?.url ?? "",
          publishedAt: item.snippet.publishedAt,
          liveBroadcastContent: "none",
        });
      }
    }

    return { live, streams };
  } catch {
    return { live: null, streams: [] };
  }
}

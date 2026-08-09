import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Drop-in campaign video override for the hero loop:
 *   public/videos/brighton-campaign.mp4
 *
 * Tablet video is separate:
 *   public/videos/brighton-tablet.mp4
 *
 * Filename must be exact. If the campaign file is missing, the site keeps the current hero videos.
 */
export const CAMPAIGN_VIDEO_FILENAME = "brighton-campaign.mp4";
export const CAMPAIGN_VIDEO_PUBLIC_PATH = `/videos/${CAMPAIGN_VIDEO_FILENAME}`;

export type VideoSource = {
  src: string;
  type: string;
};

const CAMPAIGN_VIDEO_SOURCE: VideoSource = {
  src: CAMPAIGN_VIDEO_PUBLIC_PATH,
  type: "video/mp4",
};

function getCampaignVideoAbsolutePath() {
  return path.join(
    process.cwd(),
    "public",
    "videos",
    CAMPAIGN_VIDEO_FILENAME,
  );
}

/** Returns the shared campaign video when `public/videos/brighton-campaign.mp4` exists. */
export function getCampaignVideoOverride(): VideoSource | null {
  return existsSync(getCampaignVideoAbsolutePath())
    ? CAMPAIGN_VIDEO_SOURCE
    : null;
}

export function resolveHeroVideos(
  fallback: readonly VideoSource[],
): VideoSource[] {
  const override = getCampaignVideoOverride();
  return override ? [override] : [...fallback];
}

export function resolveTabletVideo(fallback: VideoSource): VideoSource {
  return fallback;
}

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const ICONS = [
  { hobby: "gaming", slug: "gamepad", label: "Gamepad" },
  { hobby: "music", slug: "Guitar", label: "Guitar" },
  { hobby: "building", slug: "Wrench", label: "Wrench" },
  { hobby: "cars", slug: "Car", label: "Car" },
  { hobby: "electronics", slug: "Lightning", label: "Lightning" },
  { hobby: "anime", slug: "tv", label: "TV" },
  { hobby: "languages", slug: "globe", label: "Globe" },
  { hobby: "video-editing", slug: "Video Editing", label: "Video Editing" },
  { hobby: "photography", slug: "Camera V2", label: "Camera V2" },
];

const STORAGE_BASE =
  "https://firebasestorage.googleapis.com/v0/b/animatedicons-d158d.appspot.com/o";

function lottieUrl(slug) {
  const path = encodeURIComponent(`minimalistic/${slug}.json`);
  return `${STORAGE_BASE}/${path}?alt=media`;
}

const outDir = join(process.cwd(), "public", "icons", "hobbies");
mkdirSync(outDir, { recursive: true });

for (const { hobby, slug, label } of ICONS) {
  const url = lottieUrl(slug);
  const res = await fetch(url);

  if (!res.ok) {
    console.error(`FAIL ${hobby} (${slug}): HTTP ${res.status}`);
    continue;
  }

  const animationData = await res.json();
  const file = join(outDir, `${hobby}.json`);
  writeFileSync(file, JSON.stringify(animationData));
  console.log(`OK ${hobby} <- ${label} (${slug})`);
}

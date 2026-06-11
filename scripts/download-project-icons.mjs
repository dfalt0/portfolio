import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const ICONS = [
  { project: "adversarial-ai", slug: "Shield", label: "Shield" },
  { project: "portfolio", slug: "Project", label: "Project" },
];

const STORAGE_BASE =
  "https://firebasestorage.googleapis.com/v0/b/animatedicons-d158d.appspot.com/o";

function lottieUrl(slug) {
  const path = encodeURIComponent(`minimalistic/${slug}.json`);
  return `${STORAGE_BASE}/${path}?alt=media`;
}

const outDir = join(process.cwd(), "public", "icons", "projects");
mkdirSync(outDir, { recursive: true });

for (const { project, slug, label } of ICONS) {
  const url = lottieUrl(slug);
  const res = await fetch(url);

  if (!res.ok) {
    console.error(`FAIL ${project} (${slug}): HTTP ${res.status}`);
    continue;
  }

  const animationData = await res.json();
  const file = join(outDir, `${project}.json`);
  writeFileSync(file, JSON.stringify(animationData));
  console.log(`OK ${project} <- ${label} (${slug})`);
}

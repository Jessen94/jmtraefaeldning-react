/**
 * Build app/icon.png, app/apple-icon.png, and app/favicon.ico from
 * public/images/logo_2.png (the favicon source — separate from the display
 * logo at public/images/logo_1.png).
 * Run: node scripts/generate-favicons.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const input = path.join(root, "public", "images", "logo_2.png");
const appDir = path.join(root, "app");
const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

/** Turn near-black pixels transparent (JPEG matte or favicon letterboxing). */
async function logoWithTransparency() {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const threshold = 16;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] <= threshold && data[i + 1] <= threshold && data[i + 2] <= threshold) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  });
}

function pngToIco(pngBuffer, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry[0] = size >= 256 ? 0 : size;
  entry[1] = size >= 256 ? 0 : size;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(22, 12);

  return Buffer.concat([header, entry, pngBuffer]);
}

const logo = await logoWithTransparency();

async function square(size) {
  return logo
    .clone()
    .resize(size, size, { fit: "contain", background: transparent })
    .png()
    .toBuffer();
}

const png64 = await square(64);
await fs.writeFile(path.join(appDir, "icon.png"), png64);
await fs.writeFile(path.join(appDir, "apple-icon.png"), await square(360));
await fs.writeFile(path.join(appDir, "favicon.ico"), pngToIco(png64, 64));

console.log("Wrote app/icon.png (64), app/apple-icon.png (360), app/favicon.ico (64) from public/images/logo_2.png");

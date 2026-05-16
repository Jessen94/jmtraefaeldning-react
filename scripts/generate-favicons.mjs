/**
 * Build app/icon.png, app/apple-icon.png, and app/favicon.ico from public/images/logo.png.
 * Run: node scripts/generate-favicons.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const input = path.join(root, "public", "images", "logo.png");
const appDir = path.join(root, "app");
const bg = { r: 0, g: 0, b: 0, alpha: 1 };

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

async function square(size) {
  return sharp(input)
    .resize(size, size, { fit: "contain", background: bg })
    .ensureAlpha()
    .png()
    .toBuffer();
}

const png32 = await square(32);
await fs.writeFile(path.join(appDir, "icon.png"), png32);
await fs.writeFile(path.join(appDir, "apple-icon.png"), await square(180));
await fs.writeFile(path.join(appDir, "favicon.ico"), pngToIco(png32, 32));
console.log("Wrote app/icon.png, app/apple-icon.png, app/favicon.ico");

import { cp, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const exportRoot = path.resolve('dist/client');
const generatedAssets = path.join(exportRoot, 'shiozawa-site', '_next');
const publicAssets = path.join(exportRoot, '_next');

await cp(generatedAssets, publicAssets, { recursive: true });

const entries = await readdir(exportRoot, { withFileTypes: true });
const htmlFiles = entries
  .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
  .map((entry) => path.join(exportRoot, entry.name));

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, 'utf8');
  const staticHtml = html
    .replace(/<link\b[^>]*\brel="modulepreload"[^>]*>\s*/gi, '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>\s*/gi, '');

  await writeFile(htmlFile, staticHtml);
}

console.log(`Prepared ${htmlFiles.length} static HTML pages for GitHub Pages.`);

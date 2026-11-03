import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const build = new URL('dist/', root);
const destination = new URL('docs/', root);
const html = await readFile(new URL('index.html', build), 'utf8');
if (!html.includes('./assets/')) {
  throw new Error('Run npm run build with relative Vite asset paths before preparing GitHub Pages.');
}
await mkdir(destination, { recursive: true });
await cp(build, destination, { recursive: true });
await writeFile(new URL('.nojekyll', destination), '');
console.log(`GitHub Pages files prepared in ${fileURLToPath(destination)}`);

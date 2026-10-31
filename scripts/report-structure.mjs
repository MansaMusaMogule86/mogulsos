import { readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
const root=process.cwd(); let count=0;
async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){if(['node_modules','.git','.astro','dist'].includes(entry.name))continue;const path=join(dir,entry.name);if(entry.isDirectory())await walk(path);else count++;}}
await walk(root);console.log(`${count} scaffold files under ${root}`);

import { readFileSync } from 'node:fs';
const content=readFileSync('src/data/services.ts','utf8');
const count=(content.match(/"division":/g)||[]).length;
console.log(`${count} configured service routes`);

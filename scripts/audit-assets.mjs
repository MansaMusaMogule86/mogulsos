import { existsSync } from 'node:fs';
const required=['public/brand/logos','public/3d/models/hero','public/3d/models/divisions','public/videos/hero','public/posters/hero'];
for(const directory of required) console.log(`${existsSync(directory)?'OK':'MISSING'} ${directory}`);
console.log('This checks folders, not whether real licensed assets are ready.');

const fs = require('node:fs');
const entry = 'My Monday: the CEO held a listening session with all 80 of us on mute. He heard no concerns and thanked us for our honesty.';
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', entry, 'utf8');

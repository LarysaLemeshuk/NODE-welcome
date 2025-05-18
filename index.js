'use strict';
const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf-8');

then((content) => {
  const newContent = `OLD content: ${content} and NEW content: 'Helo world'`;
  fs.writeFile('./newfile.txt', newContent, 'utf8');// перезаписує файли!!!
});

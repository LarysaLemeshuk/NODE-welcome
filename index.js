'use strict';
const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf-8');

then((content) => {
  const newContent = `APPEND OLD content: ${content} and NEW content: 'Helo world'`;
  //fs.writeFile('./newfile.txt', newContent, 'utf8');// перезаписує файли!!!
  fs.appendFile('./newfile.txt', newContent, 'utf8'); // дописує файли
});

/*
Задача: замінити якусь частину файлу
1. Читаємо ВЕСЬ файл через readFile -› ВЕСЬ вміст файлу
2. Якось змінюємо вмість через JS -> ту частину вмісту файлу, яка нам потрібна
3. Перезаписати цільовий файл через writeFile тими даними, які ви отримали у п. 2
*/

'use strict'

let collectionBook = document.querySelectorAll('.books'),
    elementBook = document.querySelectorAll('.book');

collectionBook[0].insertBefore(elementBook[1], elementBook[0]);
collectionBook[0].insertBefore(elementBook[4], elementBook[3]);
collectionBook[0].appendChild(elementBook[2]);

let bodyBook = document.querySelector('body');
bodyBook.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

let titleBook = document.querySelectorAll('a');
titleBook[2].textContent = "Книга 3. this и Прототипы Объектов";

let advBook = document.querySelector('.adv');
advBook.remove();

let ulBook = document.querySelectorAll('ul'),
liBook = document.querySelectorAll('li');

ulBook[1].insertBefore(liBook[14], liBook[13]);
ulBook[1].insertBefore(liBook[12], liBook[10]);
ulBook[1].insertBefore(liBook[14], liBook[10]);

ulBook[4].insertBefore(liBook[45], liBook[38]);
ulBook[4].insertBefore(liBook[39], liBook[38]);
ulBook[4].insertBefore(liBook[40], liBook[38]);

let newList = document.createElement('li');
newList.textContent = 'Глава 8: За пределами ES6';
ulBook[5].appendChild(newList);
ulBook[5].appendChild(liBook[56]);


    
    



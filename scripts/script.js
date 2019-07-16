'use strict'

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.createElement = function (selector) {
        let newElem;
        if(selector === "."){
            newElem = document.createElement('div');
            newElem.textContent = 'DIV DIV DIV';
            newElem.style.cssText =  `height:${height}px; width:${width}px; background: ${bg}; font-size: ${fontSize}px;`  
        }
        else if(selector === "#"){
            newElem = document.createElement('p');
            newElem.textContent  = 'P P P P P';
            newElem.style.cssText =  `height:${height}px; width:${width}px; background: ${bg}; font-size: ${fontSize}px;`           
        }     
        document.body.appendChild(newElem);            
    }
}
 

let newElementOne = new DomElement('.', '200', '200', 'yellow', '50');
newElementOne.createElement('.');

let newElementTwo = new DomElement('#', '500', '500', 'pink', '50');
newElementTwo.createElement('#');



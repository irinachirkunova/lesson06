'use strict'
 
document.addEventListener('DOMContentLoaded', function() {
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
                newElem.style.cssText =  `height:${height}px; width:${width}px; background: ${bg}; font-size: ${fontSize}px;`  
                newElem.style.position = 'absolute';
            }
            else if(selector === "#"){
                newElem = document.createElement('p');
                newElem.textContent  = 'P P P P P';
                newElem.style.cssText =  `height:${height}px; width:${width}px; background: ${bg}; font-size: ${fontSize}px;`           
            }     
            document.body.appendChild(newElem);            
        }
    }

    let newElementOne = new DomElement('.', '100', '100', 'green', '0');
    newElementOne.createElement('.');

    let square = document.querySelector('div');
  
    document.addEventListener('keydown', changeKey);
   
    function changeKey(e) {
        switch(e.keyCode) {
            case 37: square.style.marginLeft = '10px'; // left
            console.log(e.keyCode); 
            break;

            case 38: square.style.marginTop = '10px';// up
            console.log(e.keyCode);
            break;

            case 39: square.style.marginLeft = '-10px'; // right
            console.log(e.keyCode);
            break;

            case 40: square.style.marginTop = '-10px'; // down
            console.log(e.keyCode);
            break;

            default: return; 
        
        }
    };

}) 









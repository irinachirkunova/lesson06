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
                newElem.id = "idProva";
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

    let newElementOne = new DomElement('.', '100', '100', 'green', '20');
    newElementOne.createElement('.');

    let square = document.querySelector('div');
    //let square = document.querySelector('p');
  
    document.addEventListener('keydown', changeKey);
   

    function changeKey(e) {
      let a;
      let b;
        switch(e.keyCode) {
            case 37: 
            var curMargin = parseInt(square.style.marginLeft);
            square.style.marginLeft = ((isNaN(curMargin) ? 0 : curMargin) - 10)+"px"; // left
            console.log(e.keyCode); 
            break;

            case 38: 
            var curMargin = parseInt(square.style.marginTop);
            square.style.marginTop = ((isNaN(curMargin) ? 0 : curMargin) - 10)+"px";;// up
            console.log(e.keyCode);
            break;

            case 39: 
            var curMargin = parseInt(square.style.marginLeft);
            square.style.marginLeft =((isNaN(curMargin) ? 0 : curMargin) + 10)+"px";;; // right
            console.log(e.keyCode);
           break;

            case 40: 
            var curMargin = parseInt(square.style.marginTop);
            square.style.marginTop =((isNaN(curMargin) ? 0 : curMargin) + 10)+"px";;; // down
            console.log(e.keyCode);
            break;

        }
    };

}) 

/*const myLesson = [
    {lesson: 1, status: true},
    {lesson: 2, status: true},
    {lesson: 3, status: false},
    {lesson: 4, status: true},
    {lesson: 5, status: false},
    {lesson: 6, status: true},
    {lesson: 7, status: true},
    {lesson: 8, status: true},
    {lesson: 9, status: true},
    {lesson: 10, status: false}
];

const falseLesson = function() {
    let arr = [];
    let obj = {};
    myLesson.forEach(function(item) {
      let a = item.lesson;
      let b = item.status;
      if(b == false) {
          obj[a] = item;
          obj[b] = item;
      }
      else {
          return null;
      }
    })
    arr.push(obj);
    console.log(arr);    
}

falseLesson();*/










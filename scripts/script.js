'use scrict';

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

week.forEach(function(item, index, array){
    let date = new Date();
    let today = date.getDay();
    if(item == "Суббота" || item == "Воскресенье") {
        item = item.italics()
    }
    else if(index == (today - 1)) {
        item = item.bold();
    }  
   document.write('<p>' + item + '</p>');
});





 


  


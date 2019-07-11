'use scrict';

let divShowDate = document.getElementById('showDate'),
    pForDate = document.createElement('p');
    divShowDate.appendChild(pForDate);

let d = new Date(),
    day = d.getDate(),
    month = d.getMonth() + 1,
    year = d.getFullYear();

   
function getZeroforDate(number) {
    if(number > 0 && number < 10) {
        return "0" + number;
    }
    else {
        return number;
    }
};

let datestring = d.toLocaleTimeString() + " " + getZeroforDate(d.getDate())  + "." + getZeroforDate((d.getMonth()+1)) + "." + d.getFullYear();

pForDate.textContent = datestring;











       




 

  


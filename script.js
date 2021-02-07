'use strict'; 

let now = new Date();


let week = ["Понедельник", "Втроник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];



week.forEach (function (item, index, array) {

    if (index - 6 === now.getDay() )
    {
        console.log (item.bold());
    }
    else if (item === "Суббота" || item === "Воскресенье"){
        console.log (item.italics());
    }
    else{
       console.log (item); 
    }
    

});
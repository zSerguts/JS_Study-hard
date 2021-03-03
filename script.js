'use strict'; 

let now = new Date();

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

week.forEach (function (item, index, array) {
    if (index  === now.getDay() - 1 ){
        document.write("<br \/>" + item.bold());
    }
    else if (item === "Суббота" || item === "Воскресенье"){
        document.write("<br \/>" + item.italics());
    }
    else{
        document.write("<br \/>" + item); 
    }
});
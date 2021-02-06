'use strict';

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

console.log(isNumber(1));
let getline = function(data){
    data = prompt('Введите строку');

    while (typeof(data) !== 'string' || isNumber(data) !== false){
        data = prompt('Введите строку');
    }
    if (data.length > 30){
        console.log(data.trim().substr(1, 30), "...");
    } else {
        console.log (data.trim());
    }
};

getline();
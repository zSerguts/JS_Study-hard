'use strict'

let getline = function(data){
    data = prompt('Введите строку');

    while (typeof(data) !== 'string'){
        data = prompt('Введите строку');
        console.log(typeof(data));
        console.log(data);
    }
    console.log(typeof(data));
    console.log(data);
    if (data.length > 30){
        console.log(data.trim().substring(data.length % 30), "...");
    } else {
        console.log (data.trim());
    }
};

getline();
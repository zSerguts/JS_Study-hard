'use strict'

const arr = ['228','136','751','842','490','246','357'];

let firstcheck = function(data){
    for (let i=0; i < data.length; i++){
        let temp = data[i];
        if ( temp[0] === '2' || temp[0] === '4'){
            console.log(temp);
        }
    }
}
firstcheck(arr);


for (let i = 1; i < 100; i++){
    let temp = 0;
    for (let j = 0; j <= i; j++){
        if (Number.isInteger(i/j) === true){
            temp++;
        }
    }
    if (temp === 2){
        console.log("", i, "простое число. Его множители:",1, "и", i);
    }
}
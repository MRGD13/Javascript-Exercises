'use strict'

//Coding challange - Arrays, basic functions, if statement
const bills = [125, 555, 44];
console.log(bills);

function calcTip(billTotal) {
    
    const fifPercent = (billTotal * 15) / 100;
    const twePercent = (billTotal * 20) / 100;

    if(billTotal >= 50 && billTotal <= 300) {
        return(fifPercent);
    }else{
        return(twePercent);
   
    }
}

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const tips = [tip1, tip2, tip3];
console.log(tips);

const total =[tip1 + bills[0], tip1 + bills[1], tip1 + bills[2]];
console.log(total);


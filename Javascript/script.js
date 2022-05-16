// add money

let addedMoney = document.querySelector('.addedMoney');
let addAmount = document.querySelector('.addAmount');
let btn = document.querySelector('.btn');
let total = document.querySelector('.total');



// remove money
let removeAmount = document.querySelector('.removeAmount');
let btn2 = document.querySelector('.btn2');
let removedMoney = document.querySelector('.removedMoney');


// total;
let totalMoney = 0;
let balance=null;

btn.addEventListener('click',function(){
  
   let finalmoney = parseInt(addAmount.value)
    totalMoney = finalmoney + totalMoney;
    total.innerHTML = totalMoney;
    addedMoney.innerHTML=addAmount.value;
    removedMoney.innerHTML=balance;
   
})

btn2.addEventListener('click',function(){
   let finalmoney = parseInt(removeAmount.value)
    totalMoney = totalMoney - finalmoney;
    total.innerHTML = totalMoney;
    removedMoney.innerHTML=removeAmount.value
    addedMoney.innerHTML = balance;
})
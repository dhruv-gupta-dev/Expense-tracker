let ls = document.getElementById("lst");
let moneyPlus = document.getElementById("money-plus");
let moneyMinus = document.getElementById("money-minus");
let balance = document.getElementById("balance");
let form = document.getElementById("form");
let text = document.getElementById("text");
let amount = document.getElementById("amount");

let arr = [];

form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    let obj={
        text:text.value,
        amount:+amount.value
    }
    ls.appendChild(addTransactionDOM(obj));
    arr.push(obj);
})

addTransactionDOM(arr){
    for(let i = 0;i<arr.length;i++){
        if(arr[i].amount<0){
    
        }
        else{

        }
    }
}
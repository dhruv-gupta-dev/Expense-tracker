let ls = document.getElementById("lst");
let moneyPlus = document.getElementById("money-plus");
let moneyMinus = document.getElementById("money-minus");
let balance = document.getElementById("balance");
let form = document.getElementById("form");
let text = document.getElementById("text");
let amount = document.getElementById("amount");
let arr = [];


form.addEventListener("submit" , (e) => {
    e.preventDefault();

    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert('Please add a text and amount');
        return; 
    }

    const obj = {
        id: Math.floor(Math.random() * 100000000),
        text: text.value,
        amount: +amount.value
    };

    arr.push(obj); 
    
    addTransactionDOM(obj); 
    
    text.value = '';
    amount.value = '';
});


function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    item.classList.add(transaction.amount < 0 ? 'money-minus' : 'money-plus');

    item.innerHTML = `
        ${transaction.text} 
        <span>${sign}${Math.abs(transaction.amount)}</span>
    `;

    ls.appendChild(item);
}
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

function updateValues() {
    const amounts = arr.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    balance.innerText = `$${total}`;
    moneyPlus.innerText = `$${income}`;
    moneyMinus.innerText = `$${expense}`;
}
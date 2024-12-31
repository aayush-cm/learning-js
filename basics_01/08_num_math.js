const Num = 200
console.log(Num);

const Money = new Number(300)
console.log(Money);

console.log(Money.toString().length);
console.log(Money.toFixed(3));

const NewNum = -123.456

console.log(NewNum.toPrecision(5));

const Balance = 14000000
console.log(Balance.toLocaleString('en-IN'));

//++++++++++++++++++ Math ++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-99));
console.log(Math.round(4.2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(1,2,3,7,9));
console.log(Math.max(1,2,3,7,9));

const Guess = (Math.floor(Math.random()*10)+1)
console.log(Guess);

const Least = 5
const Max = 25
const Dice = (Math.floor(Math.random()*(Max - Least + 1))+Least)
console.log(Dice);









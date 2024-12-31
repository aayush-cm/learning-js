//dates
let MyDate = new Date()
console.log(MyDate);
console.log(MyDate.toDateString());
console.log(MyDate.toLocaleDateString());
console.log(MyDate.toLocaleTimeString());
console.log(typeof MyDate);

//let MyCreated = new Date(2024, 0, 1)
//let MyCreated = new Date(2024, 0, 2, 5, 3,30)
//let MyCreated = new Date("2024-01-18")
let MyCreated = new Date("01-14-2024")
console.log(MyCreated.toLocaleString());


let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(MyCreated.getTime());
console.log(Math.floor(Date.now()/1000));

let NewDate = new Date()
console.log(NewDate.getMonth()+1)
console.log(NewDate.getDay);





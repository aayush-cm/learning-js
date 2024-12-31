//understanding Stack (Primitive) and Heap (Non-Primitive)
let Name = "Aayush sidana"
let Name2 = Name
Name2 = "Sidana Aayush"

console.table([Name,Name2]);

//name didnt changed since in stack/primitive copy of memory is passed
//not orignal value

let MyObj = {
    Name:"aayush sidana",
    age:18,
}
let MyObj2 = MyObj
MyObj2.age = 20
console.log(MyObj);

//value is changed in MyObj from 18 to 20 since all the changed 
//made are done on original value inheap

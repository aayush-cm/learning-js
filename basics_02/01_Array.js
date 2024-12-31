//Array
const MyArr = [1,2,3,4,5,6]
console.log(MyArr);

const Arr = ["aayush", "piyush"]
console.log( Arr);

const Narr = new Array(1,2,3,4,5)
console.log( Narr);//another way to create array(better)

Narr.push(5)//inset at last/end of array
console.log( Narr);
Narr.pop(5)//delete from last
console.log( Narr);
Narr.shift()//remove element from start
console.log( Narr);
Narr.unshift(8)//insert element at start
console.log( Narr);
console.log(Narr.includes(3));
console.log(Narr.indexOf(5));

const Carr = Narr.join() //convert "Carr" from array to string also its type is string instead of object
console.log(typeof Carr);
console.log(typeof Narr);

//splice and slice 

const Barr = [1,2,3,4,5,6]
console.log(Barr);
console.log(Barr.slice(1,4));// foesnt reflect changes onto original array(shallow copy)
console.log(Barr);
console.log(Barr.splice(1,3)); //reflect change into original (deep copy) array
console.log(Barr);








const Cdost = ["raj", "karan", "aayush"]
const Sdost = ["yash", "tanish", "garvit"]
const NewArr = Cdost.concat(Sdost)//make a new array including all elements without any subarray
const Bar = [...Cdost,...Sdost]//same as above method (preffered)

console.log(NewArr);
console.log(Bar);

const Another_Array = [1,2,3, [1,2,3, [34,56,22]]] //multiple subrarray to solve we can use 
//flat method which bring all element into single array
const Arrays = Another_Array.flat(Infinity)//try to place a number of depth like 1,2,3...depending upon how many substring
console.log(Array);

console.log(Array.isArray("Hitesh"))//Array.isarray method to check its an array or not
console.log(Array.from("AAYUSH"));//.from create array from given string
console.log(Array.from({name: "aayush"})); //?

let Score1 = 100
let Score2 = 200
let Score3 = 300
//array.of to bring all element together into a single array

console.log(Array.of(Score1,Score2,Score3));







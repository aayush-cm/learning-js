// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); =>true(yep no error)
// console.log("02" > 1); =>true(no error)

console.log(null > 0); 
console.log(null == 0);
console.log(null >= 0);

/* false 
false 
true 
coz comparison >-,<=,<,>,etc and equality check== operator work differntly 
in comaprison it covert null to 0;
therefore in 3rd null converted to is 0>=0 ,hence true
"==" and "===" are different  
== checks value equality ("33"==33) will be true irrrespective of datatype
but
"===" check datatype equality also 
therefore ("33"===33) is false hence the following code wil not execute
*/

console.log("33"===33);
//false "string" isnt equal to number

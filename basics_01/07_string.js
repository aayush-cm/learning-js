const Name = "aayush"
const Age = 18
console.log(`hello, my name is ${Name} and my age is ${Age}`);

const Str = "aayush"
let Str2 = new String("Aayush-sidana-github.com")
//console.log(Str2);

console.log(Str2[6]);
console.log(Str2.__proto__); //it show empty object since we are working in node environment
//but in console window it will show all properties 


console.log(Str2.toUpperCase());
console.log(Str2.charAt(5));
console.log(Str2.indexOf('u'));

const Substr = Str2.substring(0,10)
console.log(Substr);

const Check = Str2.slice(3,16)
console.log(Check);

const NewName = "    Aayush     "
console.log(NewName);
console.log(NewName.trim());

const url = "https://github.com/hiteshchoudhary/js-hindi-youtube/blob/main/01_basics/05_strings.js"

console.log(url.replaceAll("/","-"));
console.log(url.includes('js'));
console.log(Str2.split('-'));














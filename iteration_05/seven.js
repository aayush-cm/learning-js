const arr = [1,2,3,4,5,6,7]
const newnum = arr.map((num)=> num+5)
// console.log(newnum);
const newarr = arr
               .map((item)=>item+5)
               .map((item)=>item-5)
                .filter((item)=>item>3)
console.log(newarr);
console.log(arr);


 
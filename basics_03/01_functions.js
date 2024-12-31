//Functions

function AddTwoNumber(num1, num2) {
  console.log(num1 + num2);
}
AddTwoNumber(2, 3);

function Subtract2Num(num1, num2) {
  let result = num2 - num1;
  return result;
}
console.log(Subtract2Num(2, 6));

function Multiply(num1, num2) {
  let Answer = num1 * num2;
  return Answer;
}
const Answer = Multiply(4, 2);
console.log("result: ", Answer);

function LoginUser(username = "sam") {
  if (!username) {
    console.log("please enter your name");
    return;
  }
  return `${username} welcome`;
}

console.log(LoginUser("aayush"));

function TotalPrice(...num) {
  return num;
}
console.log(TotalPrice(100, 200, 300));

//object and function

const Obj1 = {
  name: "aayush",
  Age: 20,
};

function Detail(object) {
  return `name is ${Obj1.name} and his age is ${Obj1.Age}`;
}
console.log(Detail(Obj1));

const NewArray = [100, 200, 300, 400]

function return_third_value(array){
    
    return array[2]
}
console.log(return_third_value(NewArray));

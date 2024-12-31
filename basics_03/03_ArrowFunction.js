const user = {
    Name: "aayush",
    Age: 18 ,

    welcomemessage: function(){
        console.log(`${this.Name}, welcome your age is ${this.Age}`);
        console.log(this);
        
    }
}

user.welcomemessage(user.Age=21) //updated original object
console.log(user);

console.log(this); //show empty object since were working in node

function print(){
    let printer = "hp-razer-zxs"
    console.log(this.printer);
    
}
print()// this doesnt work in fucntion directly

const array = function printer(){
    let printer = "hp-razer-zxs"
    console.log(this.printer);
    
}
array()

const chai = () => {
    let username = "aayush"
    console.log(this);
    
}
chai()// give empty object

const newchai = (num1,num2) => {
    return num1+num2;
}
console.log(newchai(2,2))

const newarr = (num1,num2) => (num1*num2)
console.log(newarr(2,3))

const one = (n1,n2) => n1 + n2
console.log(one(1,8));

const check = (n1,n2) => ({username: "aayush"})
console.log(check(2,3));



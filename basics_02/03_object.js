//Objects
//singleton object created when we use object.create method
const Sym = Symbol("222")
const Obj = {
    Name: "aayush",
    "full name": "Aayush sidana",
    Age: 20,
    City: "Shahbad",
    [Sym]:"222",  //without [] sym will nt be reflected as symbol 
    IsLoggedIn: ["monday","tuesday"]
}

console.log(Obj);
console.log( Obj.Name) //object.namee . is used to access object attribute
console.log( Obj["full name"]); //better way to call object att is using [" "]
//. with method you cant access full name thats why 2nd method preferred

//symbol for uniqueness although values are same
console.log(Obj);
console.log(Obj[Sym]);
Obj.name = "piyush"
console.log(Obj.name);
//Object.freeze(Obj) // freeze doesnt let make any further change withinn object 
Obj.Name = "yash"
console.log(Obj.name);


Obj.greeting = function(){
    console.log("welcome user");
    
}
console.log(Obj.greeting());
Obj.greeting2 = function(){
    console.log(`hello ${this.Name} ,how are you?`);
    
}
console.log(Obj.greeting2());
console.log(Obj);















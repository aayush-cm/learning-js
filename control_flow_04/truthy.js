const UserEmail = 1

if(UserEmail){
    console.log("user logged in");
} else {
    console.log("didnt got access to user email");
}

//falsy values 
//false, 0, -0, (bigint) 5n, "", null, undefined, NaN

//truthy 
//"0", "false", " ", [], {}, function(){}

const emptyobject = {}
if(Object.keys(emptyobject).length === 0) {
    console.log("empty object");    
}

// nullish coalescing operator (??): null undefiend

let val1;
val1 = 5 ?? 10
let val2 = null ?? 10
console.log(val2);

//terniary operator

//condition ? true : false

let score = 20

score < 10 ? console.log("true"): console.log("false")
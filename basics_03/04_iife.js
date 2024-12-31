//IIFE immediately invoked function expression
//to invoke function immediately andddd to remove the pollution caused by global variables
(function aayush(){
    //named iifi 
    console.log("hello js user");
    
})();

((username)=>{
    console.log(`${username}, welcome onboard`);
    
})("aayush")
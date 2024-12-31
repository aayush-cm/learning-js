//var c = 4
let a = 700
if(true){
    let a = 5
    const b = 6
}

//console.log(a);
//console.log(b);
//console.log(c);

function One(){
    const username = "aayush"
    function Two(){
        const website = "youtube"
        console.log(username);
        
    }
    Two()
}
One()

if(true){
    const username = "aayush"
    if(username === "aayush"){
        const website = "discord"
        console.log(website + username);
        
    }
}

//++++++++++++++++++++++++++ intresting ++++++++++++++++++++++
console.log(2); 

function addnum(num){ //ifyou declare func that way you can declare/log over it
    return num+2;
}

const number = function subnum(num){ //if you store fun inside a variable then you cant excute it early..exection only after function declaration
    return num - 2;
}
console.log(4);

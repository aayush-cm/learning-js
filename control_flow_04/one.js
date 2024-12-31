// if

UserLOggedIn = true
if(UserLOggedIn == true){
    console.log("user logged in");
} else {
    console.log("not logged in");
}

// <, >, <=, >=, ==, !=, ===, !==

const Balance = 6000

if(Balance >=5000){
    let CreditCard = "amex plat"
    console.log(`user is eligible for ${CreditCard} card`);
} else {
   
    console.log(`user is not eligible for ${CreditCard} card`);
}

const UserLogin = true
const Debitcard = true
let GoogleLogIn = true
let EmailLoggedIn = false

if(UserLogin && Debitcard && 2==3){
    console.log("both check passed");
}

if(GoogleLogIn || EmailLoggedIn){
    console.log("logged in already");
    
}
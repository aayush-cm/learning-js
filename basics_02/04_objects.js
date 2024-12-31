const BumbleUser = new Object()
//another way to create objects 

BumbleUser.Name = "Aayush"
BumbleUser.Age = 18
BumbleUser.email = "Sidana749@gmail.com"

console.log(BumbleUser);

const Object1 = {
    Name: "aayush",
    FullName: {
        FirstName: "aayush", //object inside object (nested object)
        LastName: "sidana"},
    Email: "aayush123@.com"
    }

console.log(Object1.FullName.FirstName);

Obj1 ={1:'a', 2: 'b'}
Obj2 ={3:'x', 6: 'y'}
Obj3 ={4:'i', 5: 'j'}

const NewObj = Object.assign({},Obj1,Obj2,Obj3) //to put all object in a single array 
console.log(NewObj);

const Another_obj = {...Obj1,...Obj2}//preferred
console.log(Another_obj);

const Users = [
    {
    id: 1,
    email: "sidana@google.com"
    },
    {
        id:1,
        email: "sidanagithub.com"
    },
    {
        id:1,
        email: "sidana12@gmail.com"
    },
]


console.log(Users[2].email);

console.log(Object.keys(BumbleUser));
console.log(Object.values(BumbleUser));
console.log(Object.entries(BumbleUser));

//destructor
//created to shortform objects so youll not have to waste typing long objects again and again
 
const PropertyDetail = {
    PropertyBuyerName: "krsna",
    Area: "4bhk",
    ContactDetails: "Buyfromus22land.com"
}
//propertybuyername shortned as buyer = from object propertydetail
//hence you dont have to use . to access object details
const {PropertyBuyerName: Buyer} = PropertyDetail


console.log(Buyer);





 
    




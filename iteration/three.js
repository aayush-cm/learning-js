// study about for of

// ["","",""]
// [{},{},{}]

const array = [5, 4, 3, 2, 1]

for(const arr of array) {   //for(const var_name of array_name)
    //console.log(arr);       //to iterate throughout array with "for of" method
}

const wishes = "hello js user"
for(const wish of wishes){
    if(wish === " "){
        continue;
    } else {
    //console.log(wish);
    }
}


//MAPS => holds key value pair remmeber original insertion order.
//create map
const map = new Map()
map.set('dc', "discord")
map.set('wp', "whatsapp")
map.set('fb', "facebook")

//console.log(map);
//console.log(map.size);
//console.log(map.get('dc'));

for(const [key, value] of map){
    //console.log(key, value);  //get both keys and value
}

const myobj = {
    game1: "nfs",
    game2: "football"
}
 for(const [key,value] of myobj) {
    //console.log(key, value);  //not iterable , object cant be iterated with for_of loop
 }



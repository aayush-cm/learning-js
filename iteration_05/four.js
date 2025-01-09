//for_in loop to iterate through objects
const myobj = {
    js: "javascrippt",
    cpp: "c++",
    py: "python",
    swift: "swift by apple"
}

for(const key in myobj){
    //console.log(`${key} is full form of: ${myobj[key]}`);
}

const program = ["js", "ruby", "python", "swift", "cpp"]
for(const prog in program){
    //console.log(program[prog]);
}

 const map = new Map()
map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")

 for (const key in map) {
     console.log(key); //map cant be iterated using for in
 }

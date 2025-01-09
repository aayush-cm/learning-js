// for

for(let i = 0; i <= 10; i++){
    const element = i;
    if (element == 5){
        console.log("5 detected");
    }
    console.log(element);
}

for(let i = 1; i<= 10; i++) {
    console.log(`${i}: outer loop`);
 for(let j = 1; j<= 10; j++){
    console.log(i + " * " + j + ' = '  + i*j);
    }
 }

 let MyArray = ["flash", "batman", "superman"]
 for(let index = 0; index < MyArray.length; index++){
    console.log(MyArray[index]); 
 }

 //break and continue

 for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log("detected 5");
        continue;
    }
    console.log(`${index} value`);
    
 }
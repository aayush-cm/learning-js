const randomcolor = function(){
const hex = '0123456789ABCDEF'
let color = '#'
for(let i = 0; i < 6; i++){
   color += hex[Math.floor(Math.random()*16)];
}
return color;
};
let intervalid;
const shuru = function(){
    if(!intervalid){
     intervalid = setInterval(colorchange,700)
     function colorchange(){
         console.log(randomcolor())
        document.body.style.backgroundColor = randomcolor();
     }
     }
}
const khatam = function(){
    clearInterval(intervalid)
    intervalid = null;
}
document.querySelector('#start').addEventListener('click',shuru)
document.querySelector('#stop').addEventListener('click',khatam)
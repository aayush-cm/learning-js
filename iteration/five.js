//foreach
const coding = ["js", "python", "javascript", "cpp"]
coding.forEach( function(val){
    //console.log(val);
})

coding.forEach( (item)=>{
    //console.log(item);
})

function print(item){
    //console.log(item);    
}
coding.forEach(print)

coding.forEach( (item,index,arr)=> {
    //console.log(item,index,arr);
})

const mycoding = [
    {
        Firstname: "aayush",
        Lastname: "sidana"
    },
    {
        Firstname: "shin",
        Lastname: "chan"
    },
    {
        Firstname: "hare",
        Lastname: "krishna"
    }
]

mycoding.forEach( (item) => {
    console.log(item.Firstname);
    
})
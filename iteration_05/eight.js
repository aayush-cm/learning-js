//reduce
const num = [5,4,3,2,1,5]
const mytotal = num.reduce((acc ,curr)=> acc+curr,0)
console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalprice = shoppingCart.reduce((acc,curr)=>acc+curr.price,0)
console.log(totalprice);


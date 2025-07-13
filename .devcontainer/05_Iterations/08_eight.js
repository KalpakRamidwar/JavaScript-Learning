const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc}, currval: ${currval}`);
//     return acc+currval;
// }, 0) xero is starting value


// const myTotal=myNums.reduce( (acc, currval) => acc+currval, 0)

// console.log(myTotal)

const shoppingCart=[
    {
        courceName:"java cource",
        price: 1000
    },
    {
        courceName:"javascript cource",
        price: 2000
    },
    {
        courceName:"python cource",
        price: 3000
    },
    {
        courceName:"data science cource",
        price: 10000
    },
]

const totPrice=shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totPrice)
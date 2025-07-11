function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(5,10,100,200))

const user={
    username:"Kalpak",
    price: 199
}
function handleObject(anyObject){
    console.log(`usernmae is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username:"sam",
    price:233
})

const myNewArr=[100,200,300,400]

function secondValue(getArr){
    return getArr[2]
}
// console.log(secondValue(myNewArr))
console.log(secondValue([100,200,400,200,500]))
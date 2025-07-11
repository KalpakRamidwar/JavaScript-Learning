function sayMyName(){
    console.log("K");
    console.log("a");
    console.log("l");
    console.log("p");
    console.log("a");
    console.log("k");
}

// sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }

// addTwoNumber(3,4)
// addTwoNumber(3,"4")
// addTwoNumber(3,"a")
// addTwoNumber(3,null)

// function addTwoNumber(number1,number2){
//     // let result=number1+number2;
//     // return result
//     return number1+number2
// }
// // console.log(addTwoNumber(1,2))
// const result=addTwoNumber(3,4)
// console.log("result: ",result)


function userLoginMessage(username){
    if(username===undefined){  //if(!username)
        console.log("please enter a username")
        return
    }
    return `${username} is just logged in`
}
console.log(userLoginMessage("Kalpak"))
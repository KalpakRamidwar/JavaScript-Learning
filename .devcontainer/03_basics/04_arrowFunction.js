const user={
    username: "Kalpak",
    price: 999,

    wellcomeMessage: function(){
        console.log(`${this.username} , wellcome to our website`)
        // console.log(this)
    }
}

// user.wellcomeMessage()
// user.username="pranay"
// user.wellcomeMessage()

// console.log(this)

// function chai(){
//     let username="Kalpak"
//     console.log(this.username)
// }

// const chai=function(){
//     let username="Kalpak"
//     console.log(this.username)
// }

// const chai=()=>{  // this is arrow function
//     let username="Kalpak"
//     console.log(this.username)
// }

// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }


// implicit return
// const addTwo=(num1,num2)=>num1+num2

// const addTwo = ( num1,num2 ) => ( num1+num2 )

const addTwo = (num1,num2) => ({username:"Kalpak"})

console.log(addTwo(1,3))
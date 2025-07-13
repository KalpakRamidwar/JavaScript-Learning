const coding=["js","py","java","rb","cpp"]

// coding.forEach( function(val) {
//     console.log(val)
// } )

// coding.forEach( (val) => {
//     console.log(val)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})
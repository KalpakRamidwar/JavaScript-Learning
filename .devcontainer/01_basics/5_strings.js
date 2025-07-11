const name="kalpak"
const age=20

// console.log(name+age+"anything")
// this is better way
// console.log(`my name is ${name} and my age is ${age}`)

const gameName=new String("seesaw")
// functions of strings

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))
console.log(gameName.toUpperCase())
console.log(gameName.length)

const newString=gameName.substring(0,4)
console.log(newString)

// slice is same as substring but we can give neg inx also
const newString1=gameName.slice(-6,3)
console.log(newString)

const anotherString="    hello    "
console.log(anotherString)
console.log(anotherString.trim())

const url="https://kalpak.com/kalpak2rmdwr"
console.log(url.replace('2','-'))

console.log(url.includes('klpk'))
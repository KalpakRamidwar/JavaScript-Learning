// for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greet="Hello sir"
for (const val of greet) {
    // console.log(val)
}


// maps

const map=new Map()

map.set('IN',"India")
map.set('Fr',"France")
map.set('UK',"United Kingdom")
map.set('IN',"India") // map takes only unique values

// console.log(map)

for (const [key,value] of map) {
    // console.log(key,'-',value)
}

const myObj={
    game1:"NFS",
    game2:"GTA",
    game3:"FF"
}

for (const [key,value] of myObj) {
    // console.log(key,'-',value) object is not iterable
}
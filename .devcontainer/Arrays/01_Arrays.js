const marvel_heros=["thor","hulk","ironman"]
const dc_herose=["superman","flash","batman"]

// marvel_heros.push(dc_herose)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// marvel_heros.concat(dc_herose)
// console.log(marvel_heros)

// const allHerose=marvel_heros.concat(dc_herose)
// console.log(allHerose)

// const allHerose1=[...marvel_heros,...dc_herose]
// console.log(allHerose1)

// const arr=[1,2,3,[4,5,6],6,[6,7,8,[3,4,5]]]
// const arr1=arr.flat(3)  we can give infinity also
// console.log(arr1)

console.log(Array.isArray("Kalpak"))
console.log(Array.from("Kalpak"))

console.log(Array.from({name: "Kalpak"})) // learn more

const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3))
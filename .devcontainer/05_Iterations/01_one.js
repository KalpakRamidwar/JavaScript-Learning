// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if (element==5) {
//         console.log("5 printed")
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log("outer loop "+i);
//     for(let j=1; j<= 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

// let myArray=["Ironman","Thor","Hulk"]
// console.log(myArray.length)

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
// }

// break and continue

// for (let index = 0; index < 10; index++) {
//     // const element = index;
//     if (index==5) {
//         break;
//     }
//     console.log(index)
// }
for (let index = 0; index < 10; index++) {
    // const element = index;
    if (index==5) {
        continue;
    }
    console.log(index)
}
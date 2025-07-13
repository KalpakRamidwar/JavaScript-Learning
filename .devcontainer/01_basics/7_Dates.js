let myDate=new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

let myCreatedDate=new Date('09-07-2025');
// let myCreatedDate=new Date('09,07,2025');
// console.log(myCreatedDate.toLocaleString()) 

// let myTimestamp=Date.now();
// console.log(myTimestamp)
// console.log(myCreatedDate.geTime())
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString('default'{
    weekday: "long"
})
const accountId= 1234
let accountEmail="kalpak@gmail.com"
var accountPassword="111"
accountCity="Jaipur"

// accountId=12
accountEmail="pranay@gmail.com"
accountPassword="222"
accountCity="Nagpur"
let accountState;

// prefer to not use of var keyword
// becouse the issue of block scope and functional scope
console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
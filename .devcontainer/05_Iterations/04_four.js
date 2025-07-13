// for in

const myObj={
    js:'javascript',
    rb:'ruby',
    cpp:'c++',
    swift:'swift by apple'
}

for (const key in myObj) {
    // console.log(`${key} = ${myObj[key]}`);
}

const programming=["js","py","java","rb","cpp"]

for (const key in programming) {
    console.log(programming[key])
}

// map is not iterable using forin loop
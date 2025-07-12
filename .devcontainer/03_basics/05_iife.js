// immediately invoked function expression

(function chai(){
    console.log(`DB Connected`);
})();

(() => {
    console.log(`DB Connected TWO`);
})();

((name) => {
    console.log(`DB Connected TWO ${name}`);
})('Kalpak');
var hello = 'Hello';
let world = 'World';
const helloWorld = 'Hello World!'

var anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

var anotherFunction1 = () => {
    varglobal = 'I am Global';
}
anotherFunction1();
console.log(varglobal);

var anotherFunction2 = () => {
    let varlocal = varglobal = 'I am global again';
}
anotherFunction2();
console.log(varglobal);
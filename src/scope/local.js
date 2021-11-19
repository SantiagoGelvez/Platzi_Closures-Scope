var helloWorld = () => {
    const varlocal = 'I am local variable';
    console.log(varlocal);
}

helloWorld();
console.log(varlocal);


var newHelloWorld = () => {
    const varlocal = 'I am local variable';
    var lexicalScope = () => {
        return varlocal;
    }
    console.log(lexicalScope());
}

newHelloWorld();
console.log(varlocal);
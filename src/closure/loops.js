const anotherFunction = () => {
    for (var i = 0; i < 10; i++){
        setTimeout(() => {console.log(i)}, 1)
    }
}

anotherFunction();


const anotherFunction = () => {
    for (let i = 0; i < 10; i++){
        setTimeout(() => {console.log(i)}, 1)
    }
}

anotherFunction();
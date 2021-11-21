const buildCount = (i) => {
    let count = i;
    const displayCount = (test) => {
        console.log(test + " " + count++);
    }
    return displayCount;
}

const myCount = buildCount(1);
const myNewCount = buildCount(10);


myCount('Primera ejecución: ');
myCount('Segunda ejecución: ');
myCount('Tercera ejecución: ');


myNewCount('Cuarta ejecución: ');
myNewCount('Quinta ejecución: ');
myCount('Sexta ejecución: ');





const buildCount = (i) => {
    // let count = i;
    const displayCount = () => {
        console.log(++i);
    }
    return displayCount;
}

const myCount = buildCount(1);

myCount(1);
myCount(1);
myCount(1);

const myNewCount = buildCount(10);

myNewCount();
myNewCount();
myCount();
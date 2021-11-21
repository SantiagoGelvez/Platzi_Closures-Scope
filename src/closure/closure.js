//Ejemplo sin closure
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`My money: $${saveCoins}`);
}
moneyBox(10);
moneyBox(8);

//Ejemplo que yo haría
let saveCoins = 0;
const moneyBox = (coins) => {
    saveCoins += coins;
    console.log(`My money: $${saveCoins}`);
}
moneyBox(10);
moneyBox(8);

//Ejemplo con closure
const moneyBox = () => {
    let saveCoins = "m";
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`My money: $${saveCoins}`);
    }
    return countCoins;
}
let myMoneyBox = moneyBox();
myMoneyBox(10);
myMoneyBox(15);
myMoneyBox(7);

//Ejemplo con closure con una variacion.
const moneyBox = () => {
    let saveCoins = 0;
    return countCoins = (coins, box) => {
        saveCoins += coins;
        console.log(`My money ${box}: $${saveCoins}`);
    }
}
let myMoneyBox = moneyBox();
let anotherMoneyBox = moneyBox();

anotherMoneyBox(7, "Another");
myMoneyBox(34, "My");
anotherMoneyBox(23, "Another");
myMoneyBox(9, "My");
anotherMoneyBox(12, "Another");
myMoneyBox(10, "My");
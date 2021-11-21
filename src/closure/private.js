const person = () => {
    let saveName = 'InitName';
    return{
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    }
}

let newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Santiago");
console.log(newPerson.getName());
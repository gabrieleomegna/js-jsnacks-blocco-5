// Crea un array di oggetti che rappresentino delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const users = [
    {
        name: 'Gino',
        surname: 'Ginetti',
        age: 15
    },
    {
        name: 'Franca',
        surname: 'Franchetti',
        age: 62
    },
    {
        name: 'Gabriella',
        surname: 'Omegno',
        age: 17
    },
    {
        name: 'Daniele',
        surname: 'Rossi',
        age: 35
    },
    {
        name: 'Patrizia',
        surname: 'Sabatelli',
        age: 5
    },
    {
        name: 'Sebastiano',
        surname: 'Targa',
        age: 12
    },
    {
        name: 'Genoveffa',
        surname: 'Zeta',
        age: 75
    },
];

const newUsersArray = users.map((singleUser) => {
    if (singleUser.age < 18) {
        return `${singleUser.name} ${singleUser.surname} non può guidare perché ha ${singleUser.age} anni`;
    } else {
        return `${singleUser.name} ${singleUser.surname} può guidare perché ha ${singleUser.age} anni`;
    }
});
console.log(users);
console.log(newUsersArray);
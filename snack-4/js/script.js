// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].




const lettersArray = ['a', 'b', 'c', 'd'];
const numbersArray = [1, 2, 3, 4];
const newAlternArray = [];
lettersArray.forEach((element, index) => {
    newAlternArray.push(element, numbersArray[index])
})
console.log(newAlternArray)

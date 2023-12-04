// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.

const cars = [
    {
        brand: 'Mercedes',
        model: 'Class A AMG',
        engine: 'gas',
    },
    {
        brand: 'Porsche',
        model: 'Panamera Turbo S',
        engine: 'diesel',
    },
    {
        brand: 'Hummer',
        model: 'H3',
        engine: 'diesel',
    },
    {
        brand: 'Tesla',
        model: 'Cybertruck',
        engine: 'electric',
    },
    {
        brand: 'Nissan',
        model: 'GT 3 RS',
        engine: 'gas',
    },
    {
        brand: 'Audi',
        model: 'R8 e-tron GT',
        engine: 'electric',
    },
    {
        brand: 'Lamborghini',
        model: 'Aventador',
        engine: 'gas',
    },
    {
        brand: 'Renault',
        model: 'Captur',
        engine: 'gpl',
    },
    {
        brand: 'Honda',
        model: 'Civic',
        engine: 'diesel',
    },
    {
        brand: 'Hyundai',
        model: 'i20',
        engine: 'gpl',
    },
]

const gasCars = cars.filter((car) => car.engine === 'gas');
const dieselCars = cars.filter((car) => car.engine === 'diesel');
const otherCars = cars.filter((car) => car.engine === 'electric' || car.engine === 'gpl')

console.log(cars);
console.log(gasCars);
console.log(dieselCars);
console.log(otherCars);
function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 ===0;
}

function filtraImpares(arr){
    return arr.filter(callback2);
}

function callback2(item) {
    return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 7, 30, 8, 13];

console.log(`Numeros pares`, filtraPares(meuArray));
console.log(`Numeros impares`, filtraImpares(meuArray));

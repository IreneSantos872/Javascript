const meuArray = [30, 10,30, 40,5, 233, 2046, 3034, 5 ]

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));
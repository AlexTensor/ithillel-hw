export function generateKey(length, characters) {
    const keyArray = [];
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * (characters.length));
        keyArray.push(characters[randomIndex]);
    }
    return keyArray.join('');
}

export function average(mixed) {
    const numbersArray = mixed.map(el => Number(el))
        .filter(el => !isNaN(el));
    const sum = numbersArray.reduce((a, b) => a + b, 0);
    console.log(numbersArray);
    return sum / numbersArray.length;
}

export function showDeepArray(deep){
    if(Array.isArray(deep)){
        deep.forEach(elem => showDeepArray(elem));
    }else {
        console.log(deep);
    }
}
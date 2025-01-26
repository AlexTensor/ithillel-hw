export function generateKey(length, characters) {
    const keyArray = [];
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * (characters.length));
        keyArray.push(characters[randomIndex]);
    }
    return keyArray.join('');
}

export function average(mixed) {
    const numbersArray = mixed.filter(elem => !isNaN(Number(elem)))
        .map(el => Number(el));
    const sum = numbersArray.reduce((a, b) => a + b, 0);
    console.log(numbersArray);
    return sum / numbersArray.length;
}

export function showDeepArray(deep){
    if(Array.isArray(deep)){
        deep.forEach(elem => {
            if(Array.isArray(elem)) {
                showDeepArray(elem)
            }else{
                console.log(elem);
            }
        });
    }else {
        console.log(deep);
    }
}
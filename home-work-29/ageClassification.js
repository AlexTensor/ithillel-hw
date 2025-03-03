export function ageClassification(n) {
    if(!n || isNaN(Number(n)) || typeof n === 'object'){
        throw new Error('Please provide a number');
    }
    if(n <= 0 || n > 122) {
        return null;
    }
    if (n > 0 && n <= 24) {
        return 'Дитинство';
    }else if (n > 24 && n <= 44) {
        return 'Молодість';
    }else if (n > 44 && n <= 65) {
        return 'Зрілість';
    }else if (n > 65 && n <= 75) {
        return 'Старість';
    }else if (n > 75 && n <= 90) {
        return 'Довголіття';
    }else if (n > 90 && n <= 122) {
        return 'Рекорд';
    }
}
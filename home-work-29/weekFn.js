export function weekFn(n) {

    if(!n){
        throw new Error('Please provide a number');
    }

    switch(Number(n)) {
        case 1:
            return 'Понеділок';
        case 2:
            return 'Вівторок';
        case 3:
            return 'Середа';
        case 4:
            return 'Четвер';
        case 5:
            return 'П\'ятниця';
        case 6:
            return 'Субота';
        case 7:
            return 'Неділя';
        default:
            return null;
    }
}
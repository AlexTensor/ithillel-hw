console.log('#1. Приклад домашнього завдання з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'
const myNum = 10;
const myStr = 'some string';
const myBool = true;
const myArr = [1, 2, 3, 4, 5];
const myObj = {
    first: 'First Name',
    last: 'Last Name'
}

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2

const decimal2 = myNum.toFixed(2);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i
let i = 10;
console.log('incr post', i++);
console.log('total1', i);
i = 10;
console.log('incr pre', ++i);
console.log('total2', i);
i = 10;
console.log('decr post', i--);
console.log('total3', i);
i = 10;
console.log('decr pre', --i);
console.log('total4', i);

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

// myTest
// +=
// –=
// *=
// /=
// %=

let myTest = 20;
myTest += 10;
console.log(myTest);
myTest -= 2;
console.log(myTest);
myTest /= 2;
console.log(myTest);
myTest *= 3;
console.log(myTest);
myTest %= 10;
console.log(myTest);


/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow

const myPi = Math.PI;
const myRound = Math.round(89.279);
const myRandom = Math.floor(Math.random() * 11);
const myPow = Math.pow(3, 5)
console.log(myPi);
console.log(myRound);
console.log(myRandom);
console.log(myPow);

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

const strObj = new Object();
strObj.str = "Мама мыла раму, рама мыла маму";
strObj.length = strObj.str.length;

// Мама мыла раму, рама мыла маму
// strObj

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */
const isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);
const isRama = strObj.str.includes('рама');
console.log(isRama);

// isRamaPos
// isRama

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace

const strReplace = 'Мама мыла раму, рама мыла маму'.replace('Мама мыла', 'Мама моет').replace('рама мыла', 'Рама держит');
console.log(strReplace);

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr

const someStr = 'some STRING';
const upperStr = someStr.toUpperCase();
const lowerStr = someStr.toLowerCase();
console.log(lowerStr);
console.log(upperStr);

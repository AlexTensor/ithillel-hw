'use strict';

/*
#1

a) Створити клас Людина.
  Властивості:
    імʼя;
    стать.
  Методи:
    конструктор, який приймає два параметри: імʼя та стать.

b) Створити клас Квартира.
  Властивості:
    конструктор не потрібен;
    масив жителів, який при створенні пустий.
  Методи:
    додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

c) Створити клас Будинок.

  Властивості:
    масив квартир, який при створенні пустий;
    максимальна кількість квартир.
  Методи:
    конструктор, який приймає один параметр: максимальну кількість квартир;
    додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

d) В якості демонстраціїї створити:
  декілька екземплярів класу Людина;
  декілька екземплярів класу Квартира;
  додадити екземпляри класу Людина до екземплярів класу Квартира;
  екземпляр класу Будинок;
  додадити екземпляри класу Квартира до екземплярів класу Будинок.
*/


class Human{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
}
class Flat {
    residentList = [];
    addResident(human){
        if(human && human instanceof Human){
            this.residentList.push(human);
        }else{
            console.error('Only people, no pets');
        }
    }
}
class Building {
    buildingList = [];
    constructor(flatRate){
        this.flatRate = flatRate;
    }
    addFlat(flat) {
        if(flat instanceof Flat){
            if(this.buildingList.length < this.flatRate){
                this.buildingList.push(flat);
            }else{
                console.error(`You can't add this flat, we'll add extra floor soon`);
            }
        }else{
            console.error('Only flats, no dog house');
        }
    }
}

const mike = new Human('Mike', 'male');
const nika = new Human('Nika', 'female');
const tim = new Human('Tim', 'male');

const bol = new Human('Bol', 'male');
const lisa = new Human('Lisa', 'female');

const flat1 = new Flat();
flat1.addResident('test');
flat1.addResident(nika);
flat1.addResident(mike);
flat1.addResident(tim);

console.log(flat1);

const flat2 = new Flat();
flat2.addResident(bol);
flat2.addResident(lisa);

console.log(flat2);

const house = new Building(2);

house.addFlat(flat2);
house.addFlat(flat1);

console.log(house);


'use strict'
export class Hamburger {
    static SIZE_SMALL = {
        price: 50,
        calories: 20
    };
    static SIZE_BIG = {
        price: 100,
        calories: 40
    };
    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    };
    static STUFFING_SALAT = {
        price: 20,
        calories: 5
    };
    static STUFFING_POTATO = {
        price: 15,
        calories: 10
    }
    static TOPPING_MAYO = {
        price: 20,
        calories: 5
    }
    static TOPPING_SAUCE = {
        price: 15,
        calories: 0
    }

    constructor(size, stuffing) {
        this.kit = [size, stuffing];
    }
    addTopping(topping) {
        this.kit.push(topping);
    }
    calculatePrice(){
        return this.kit.reduce((acc, el) => acc + el.price, 0);
    }
    calculate(){
        return this.kit.reduce((acc, el) => acc + el.calories, 0);
    }

}
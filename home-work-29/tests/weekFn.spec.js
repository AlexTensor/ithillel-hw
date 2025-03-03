import { weekFn } from '../weekFn.js';

describe(`find day of the week day function`, () => {
    it(`should return day of the week if pass number`, () => {
        expect(weekFn(1)).toBe(`Понеділок`);
        expect(weekFn(4)).toBe(`Четвер`);
    })
    it(`should return day of the week day if pass formated text to number`, () => {
        expect(weekFn('3')).toBe(`Середа`);
        expect(weekFn('7')).toBe(`Неділя`);
    })
    it(`should return error w/o parameter`, () => {
        expect(() => {
            weekFn();
        }).toThrow('Please provide a number');
    })

    it(`should return null if wrong data or param`, () => {
        expect(weekFn('8')).toBe(null);
        expect(weekFn([])).toBe(null);
    })
});

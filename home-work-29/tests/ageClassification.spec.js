import {ageClassification} from "../ageClassification.js";


describe('age classifications function', () => {
    it(`should return error w/o parameter`, () => {
        expect(() => {
            ageClassification();
        }).toThrow('Please provide a number');
    });
    it(`should return class when provide number`, () => {
        expect(ageClassification(1)).toBe(`Дитинство`);
        expect(ageClassification(76)).toBe(`Довголіття`);
    });
    it(`should return class when provide text cast to number`, () => {
        expect(ageClassification('1')).toBe(`Дитинство`);
        expect(ageClassification('76')).toBe(`Довголіття`);
    });
    it(`should return class when provide negative or more 122`, () => {
        expect(ageClassification('-1')).toBe(null);
        expect(ageClassification('123')).toBe(null);
    });

    it(`should return error when prived wrong data`, () => {
        expect(() => {
            ageClassification([]);
        }).toThrow('Please provide a number');
    });

});
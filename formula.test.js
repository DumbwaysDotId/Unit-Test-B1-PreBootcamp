//Import Function to Test
const formula = require("./formula")

const a = 2;
const b = 3;
const output = 5;

//Our Jest method containing multiple tests that define our objective

describe('sum', () => {
    
    //Test 1
    it("should have value 5", () => {
        const result = formula(a, b);
        expect(result).toEqual(output)
    })

    it("should have value 10", () => {
        const result = formula(5,5)
        expect(result).toEqual(10)
    })
});

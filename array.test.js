//Input FUnction to tes
const removeSNames = require("./array")

describe('removeSNames', () => {
    
    //Test1 (Name with S should not be present in the result array)
    it("Should Remove all S Names", () => {
        const names = ['Apple', "Strawberry", "Star Fruit"];
        expect(removeSNames(names)).not.toContain('Strawberry')
        expect(removeSNames(names)).not.toContain('Star Fruit')
    })

    //Test 2 (name without S shoud remain untoched)
    it("Should not remove other names", () => {
        const names = ['Apple', "Strawberry", "Pinaple"];
        expect(removeSNames(names)).toContain('Apple')
        expect(removeSNames(names)).toContain('Pinaple')
    })
})

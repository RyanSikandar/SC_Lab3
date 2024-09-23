// Import the RulesOf6005 class
const RulesOf6005 = require('./RulesOf6005'); // Adjust the path if needed

describe('RulesOf6005', () => {
    /**
     * Tests the mayUseCodeInAssignment method.
     */
    test('should return false for un-cited publicly-available code', () => {
        expect(RulesOf6005.mayUseCodeInAssignment(false, true, false, false, false)).toBe(false);
    });

    test('should return true for self-written required code', () => {
        expect(RulesOf6005.mayUseCodeInAssignment(true, false, true, true, true)).toBe(true);
    });
});

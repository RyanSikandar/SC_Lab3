// Import the RulesOf6005 class
const RulesOf6005 = require('./RulesOf6005'); // Adjust the path if needed

describe('RulesOf6005', () => {
    /**
     * Tests the mayUseCodeInAssignment method.
     */
    test('should return false for un-cited publicly-available code', () => {
      expect(RulesOf6005.mayUseCodeInAssignment(false, true, false, false, false)).toBe(true);
    });
  
    test('should return true for self-written required code', () => {
      expect(RulesOf6005.mayUseCodeInAssignment(true, false, true, true, true)).toBe(false);
    });
  
    // New test 1: Test case for self-written optional code that's cited
    test('should return true for self-written optional code that is cited', () => {
      expect(RulesOf6005.mayUseCodeInAssignment(true, true, false, true, true)).toBe(true);
    });
  
    // New test 2: Test case for publicly available, required, but not cited code
    test('should return false for publicly available required code that is not cited', () => {
      expect(RulesOf6005.mayUseCodeInAssignment(false, false, true, true, false)).toBe(false);
    });
  });
  
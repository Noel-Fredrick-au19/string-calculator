import StringCalculator from '../src/StringCalculator'; 

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it('should return the sum of one number', () => {
    expect(calculator.add('1')).toBe(1);
  });

  it('should return 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  it('should handle new lines between numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  it('should handle different delimiters', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => calculator.add('1,-2')).toThrow('Negative numbers not allowed: -2');
  });
  

})

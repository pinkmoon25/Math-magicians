import operate from '../logic/operate';

describe('test operate function', () => {
  test('expect 5 + 5 to be "10"', () => {
    expect(operate(5, 5, '+')).toBe('10');
  });
  test('expect 15 - 3 to be "12"', () => {
    expect(operate(15, 3, '-')).toBe('12');
  });
  test('expect 100 x 29 to be "2900"', () => {
    expect(operate(100, 29, 'x')).toBe('2900');
  });
  test('expect 200 ÷ 25 to be "8"', () => {
    expect(operate(200, 25, '÷')).toBe('8');
  });
  test('expect 15 ÷ 0 to be "Can\'t divide by 0."', () => {
    expect(operate(15, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('expect 120 % 5 to be "0"', () => {
    expect(operate(120, 5, '%')).toBe('0');
  });
  test('expect 12 % 0 to be "Can\'t find modulo as can\'t divide by 0."', () => {
    expect(operate(12, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});

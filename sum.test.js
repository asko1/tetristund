const assert = require('assert');
const sum = require('./sum');

describe('expect', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('adds 1 + 2 to NOT equal 2', () => {
    expect(sum(1, 2)).not.toBe(2);
  });
});

describe('assert', () => {
  test('adds 1 + 1 to equal 2', () => {
    assert.equal(sum(1, 1), 2);
  });

  test('adds 1 + 5 to equal 6', () => {
    assert(sum(1, 5) === 6);
  });
});

const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    const potion = new Potion('health');
  
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
  });


  test('creates a random potion object', () => {
    const potion = new Potion();
  
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
  });
































  // const checkIfEqual = require('../lib/random.js');

// test('checks if 10 is equal to 10', () => {
//   expect(checkIfEqual(10, 10)).toBe(true);
// });

// const randomNumber = require('../lib/random.js');

// test('gets random number between 1 and 10', () => {
//   expect(randomNumber()).toBeGreaterThanOrEqual(1);
//   expect(randomNumber()).toBeLessThanOrEqual(10);
// });
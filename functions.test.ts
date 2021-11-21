const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('should be an array', () => {
        expect(shuffleArray).toBe(Array);
  
  });
  test('should be all the same items in the array', () => {
    expect(shuffleArray.data).toBe(shuffleArray);
  })
})
const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('should be an array', () => {
        const testArray = [4, 5, 10, 11, 13]
        const testVar = shuffleArray(testArray)
        expect(Array.isArray(testVar)).toBe(true)
    
  
  });
  test('should be all the same items in the array', () => {
    const testArray = [4, 5, 10, 11, 13]
    const testVar = shuffleArray(testArray)
    expect(testArray.length).toEqual(testVar.length);
  })
})
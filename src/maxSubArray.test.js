const maxSubArray = require('./maxSubArray')

describe('maxSubArray', () => {
    test('it should return the maximum sum of sub array items', () => {
        const maxSum = maxSubArray([2,1,9,4,6], 2)
        expect(maxSum).toBe(13)
    })
})
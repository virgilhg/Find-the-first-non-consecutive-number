function firstNonConsecutive (arr) {
  if(arr.length===0 || arr.length=== 1  ){
       return null
     }
  for (let i=0; i<arr.length -2 ; i++){
  
     if( arr[i+1]!= arr[i] +1 ){
        return arr[i+1]
     }
  }
  return null
}

// Test cases:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", () => {
  it('a simple example', function() {
    const first = firstNonConsecutive([1,2,3,4,6,7,8])
    assert.strictEqual(first, 6)
  })
  
   it('all sequential', function() {
    const first = firstNonConsecutive([1,2,3,4])
    assert.strictEqual(first, null)
  })
})

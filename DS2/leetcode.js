//268. Missing Number

var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    // console.log('array is',array);
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==i){
            return i
        }
    }
    return nums.length
}

// 2357. Make Array Zero by Subtracting Equal Amounts
// 219. Contains Duplicate II

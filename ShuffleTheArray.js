/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let shuffle_array =[]
    let mid = n
    for(i=0;i<n;i++){
            shuffle_array.push(nums[i])
            shuffle_array.push(nums[mid])
            mid++
        }
    
    return shuffle_array
    
};

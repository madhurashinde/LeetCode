/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
      let boolean = false
    nums.sort(function(a, b){return a - b});
    for(let i=0;i<nums.length;i++){
            if(nums[i] === nums[i+1]){
                boolean = true
                break
            }
        }   
    
    return boolean
    
};

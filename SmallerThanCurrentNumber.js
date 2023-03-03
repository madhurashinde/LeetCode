/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    let final_array= []
    for(let i=0;i<nums.length;i++){
        let count =0
        let current_value = nums[i]
        for(let i=0;i<nums.length;i++){
            if(current_value>nums[i]){
                count++
            }
        }
    final_array.push(count)
    }
    return final_array
};

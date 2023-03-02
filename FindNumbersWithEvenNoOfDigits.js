/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    
    let ctr =0
    for(let i =0; i<nums.length;i++){
        let count =0;
        while(nums[i]){
            nums[i]%10 
            count = count+1
            nums[i] =Math.floor(nums[i]/10)
        }
        if(count%2 ===0){
            ctr=ctr+1
        }
    }
    return ctr
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//pushing to github
var getConcatenation = function(nums) {
    let ans =[]
    while(ans.length<(2*nums.length)){
        for(let i =0; i<nums.length;i++){
            ans.push(nums[i])
        }
    }
    return ans
    }
    

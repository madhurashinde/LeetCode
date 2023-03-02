/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result =[]
    let added_candies=[]
    for(let i =0;i<candies.length;i++){
        added_candies.push(candies[i]+extraCandies)
    }
    let boolean = true
    for(let each of added_candies){
        for(let i=0;i<candies.length;i++){
            if(each>=candies[i]){
                boolean = true
            }
            else{
                boolean = false
                break;
            }
        }
        result.push(boolean)
    }
    return result
};

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let result = new Array((gain.length+1))
    result [0] =0
    for(let i =1;i<=gain.length;i++){
        result[i]=gain[i-1]+result[i-1]
    }
    let max = result[0]
    for(let i=1;i<result.length;i++){
        if(result[i]>max){
            max= result[i]
        }
    }
    return max
};

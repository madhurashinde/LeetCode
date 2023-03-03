/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let reversed_array=[]
    for(let i=0;i<image.length;i++){
        reversed_array.push(image[i].reverse())
            for(let j=0;j<image[i].length;j++){
                if(reversed_array[i][j] ===0){
                    reversed_array[i][j] =1
                }
                else if(reversed_array[i][j] ===1){
                    reversed_array[i][j] =0
                }
            }
    }
    return reversed_array
};

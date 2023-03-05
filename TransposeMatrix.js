/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row = matrix.length
    let col = matrix[0].length
    let transpose_matrix= []
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(!transpose_matrix[j]){
                transpose_matrix[j] = []
            }
            transpose_matrix[j][i] = matrix[i][j];
        }
    }
  
    return transpose_matrix
};

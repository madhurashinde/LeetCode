/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    let all_wealths =[]
    for(let row=0;row<accounts.length;row++){
        let wealth =0
        for(let col=0; col<accounts[row].length;col++){
            wealth = wealth+ accounts[row][col]
        }
        all_wealths.push(wealth)
    }
    let max_wealth =all_wealths[0]
    for(let i=1;i<all_wealths.length;i++){
        if(all_wealths[i]>max_wealth){
            max_wealth = all_wealths[i]
        }
    }
    return max_wealth
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = String(x)
    let reversed_str = str.split('').reverse().join('')

    let boolean = true
    if(reversed_str===str){
        boolean = true
    }
    else{
        boolean = false
    }
    
    return boolean
};

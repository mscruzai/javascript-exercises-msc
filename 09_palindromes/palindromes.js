const palindromes = function (str) {
    str = str.replace(/\W/ig, "").toUpperCase();
    s = str.length;
    for(i=0; i < s ; i++){
        if(str.charAt(i) !== str.charAt(s-1-i)){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

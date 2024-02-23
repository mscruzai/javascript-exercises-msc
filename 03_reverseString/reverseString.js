const reverseString = function(string) {
    
    let strLength = string.length;
    let strArray =  string.split("");
    const reversedArray =[];

    for(i=0 ; i < strLength ; i++){
        reversedArray[i] = strArray[strLength - 1 - i];
    } 
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;

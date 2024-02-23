const repeatString = function(string, repeats) {
    
    if(repeats < 0)
        return "ERROR";
    let repeatedString = "";

    while (repeats > 0){
        repeatedString += string;
        repeats--;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;

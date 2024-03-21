const fibonacci = function(n) {
    
    // initial members
    a = 0;
    b = 1;

    for(i = 1; i < n ; i++){
        c =  b;
        b = a + b;
        a = c;
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;

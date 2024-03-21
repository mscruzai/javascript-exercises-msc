const fibonacci = function(nth) {

    n = (typeof nth !== 'number'
        ? parseInt(nth)
        : nth) ;
    
    if(n < 0) return "OOPS";
    if(n == 0) return 0;

    for(a = 0, b = 1, i = 1; i < n ; i++){
        c =  b;
        b = a + b;
        a = c;
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;

const sumAll = function(naturalA, naturalB) {
    
    let sum=0;

    if(!Number.isInteger(naturalA) || !Number.isInteger(naturalB) )
        return "ERROR";
    if( naturalA < 0 || naturalB < 0 )
        return "ERROR";
    if (naturalA > naturalB){
        let temp = naturalB;
        naturalB = naturalA;
        naturalA = temp;
    }

    for(i = naturalA; i <= naturalB ; sum+=i, i++);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

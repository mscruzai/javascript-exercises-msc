const removeFromArray = function(array, ...remove) {
    
    let index = -1;
    for (let i=0 ; i < remove.length; i++){
        while((index = array.indexOf(remove[i])) > -1)
            array.splice(index,1);
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;

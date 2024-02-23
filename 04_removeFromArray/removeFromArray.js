const removeFromArray = function(array, ...remove) {
    
    let index = 0;
    for (let i=0 ; i < remove.length; i++){
        index = array.indexOf(remove[i]);
        array.splice(index,1);
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;

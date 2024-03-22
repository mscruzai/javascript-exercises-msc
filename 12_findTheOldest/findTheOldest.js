const findTheOldest = function(arrPeople) {
    return arrPeople.reduce(
        (oldest, person ) => {
            
            let personAge = !person.yearOfDeath
                  ? (new Date().getFullYear() - person.yearOfBirth)
                  : (person.yearOfDeath - person.yearOfBirth);

            if( personAge > (oldest.yearOfDeath - oldest.yearOfBirth)){
                oldest = person;
            }
            
            return oldest;
        }
    );
};

// Do not edit below this line
module.exports = findTheOldest;

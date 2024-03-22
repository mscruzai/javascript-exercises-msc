const findTheOldest = (arrPeople) =>
    arrPeople.reduce(
        (oldest, person ) => {
            
            let personAge = getAge( person.yearOfBirth , person.yearOfDeath );
            let oldestAge = getAge( oldest.yearOfBirth , oldest.yearOfDeath );
            
            return personAge > oldestAge ? person : oldest;
        }
    );

const getAge = (birth, death) => 
    !death
    ? new Date().getFullYear() - birth
    : death - birth;


// Do not edit below this line
module.exports = findTheOldest;

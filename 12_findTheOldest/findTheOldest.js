const findTheOldest = function(people) {
    const now = new Date();
    const thisYear = now.getFullYear();
    let sortedByAge = people.sort((a, b) => {
        age1 = (a.yearOfDeath || thisYear) - a.yearOfBirth;
        age2 = (b.yearOfDeath || thisYear) - b.yearOfBirth;
        return age2 - age1;
    })
    
    return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;

const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Zlatan","David","Divakar","Azamat","Eric","Alex","Juan","Anthony","Marcus","Nemja","Patrice","Dieogo"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}

const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Raut","Nepal","Bista","Chaulagain","Pokharel","Timalsina","Maharjan","Joshi","Koirala","Silwal","Khanal","Ibrahimovic"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}

const getRandomNumber = max => Math.floor(Math.random() * max);

module.exports = {
    getRandomGivenName,
    getRandomFamilyName,
    getRandomNumber
}
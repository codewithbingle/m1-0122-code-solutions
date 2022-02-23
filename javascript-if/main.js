/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// isUnderFive(number)

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

isUnderFive(4);
isUnderFive(10);
isUnderFive(5);

// isEven(number)

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

isEven(4);
isEven(10);
isEven(5);

// startsWithJ(string)

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

/*
 if (string.slice(0, 0) === 'J') {
    startsWithJ = true;
  } else {
    startsWithJ = false;
  }
  return startsWithJ;
} */

startsWithJ('JavaScript');
startsWithJ('PHP');
startsWithJ('HTML');
startsWithJ('Java');
startsWithJ('Kotlin');
startsWithJ('C#');

// isOldEnoughToDrink(person)

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

var bingle = {
  name: 'Bingle Padilla',
  age: 39
};

isOldEnoughToDrink(bingle);

// isOldEnoughToDrive (person)

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

var samantha = {
  name: 'Samantha Meah-Morton',
  age: 15
};

isOldEnoughToDrive(samantha);

// isOldEnoughToDrinkAndDrink(person)

function isOldEnoughToDrinkAndDrink(person) {
  if (person.age > 0) {
    return false;
  }
}

var harry = {
  name: 'Harry Meah-Morton',
  age: 34
};

isOldEnoughToDrinkAndDrink(harry);

// categorizedAcidity(pH)

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

categorizeAcidity(-1);
categorizeAcidity(14.0000001);
categorizeAcidity(7);
categorizeAcidity(2);
categorizeAcidity(9);

// introduceWarnerBro(name)

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight';
  }
}

introduceWarnerBro('yakko');
introduceWarnerBro('wakko');
introduceWarnerBro('dot');
introduceWarnerBro('cody');
introduceWarnerBro('minerva');

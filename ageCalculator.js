const ageCalculator = function(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth
  let message = `${name} is ${age} years old.`
  return message
}

ageCalculator("Suzie", 1983, 2015);

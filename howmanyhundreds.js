function howManyHundreds(num) {
  let remainder = num % 100;
  let answer = (num - remainder) / 100;
  return answer;
}

howManyHundreds(300);

function howManyHundreds(num) {
  containers = num / 100;
  return Math.floor(containers);
}

howManyHundreds(300);

let cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
];
let speed = 38;

const carPassing = (cars, speed) => {
  let cars2 = [...cars];
  if (cars && cars.length && speed) {
    cars2.push({
      time: Date.now(),
      speed
    });
  }
  return cars2;
};
carPassing(cars, speed);

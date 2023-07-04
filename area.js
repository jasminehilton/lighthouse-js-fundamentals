function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  }
  let answer = length * width;
  return answer;
}
calculateRectangleArea(2, 10);

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  }
  let answer = (base * height) / 2;
  return answer;
}
calculateTriangleArea(3, 2.5);

function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  }
  let answer = Math.PI * (radius * radius);
  return answer;
}
calculateCircleArea(10);

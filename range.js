function range(start, end, step) {
  let a = start;
  let b = end;
  let i = step;
  let empty = [];
  if (a === undefined || b === undefined || i === undefined) {
    return empty;
  } else if (a > b) {
    return empty;
  } else if (i <= 0) {
    return empty;
  }
  for (a; a <= b; a += i) {
    empty.push(a);
  }
  return empty;
}
range(0, 8, 2);

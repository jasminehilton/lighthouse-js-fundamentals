const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3
  }
];

const metric = "plumpness";

function judgeVegetable(vegetables, metric) {
  let max = 0;
  let submitter = "";
  for (const veg of vegetables) {
    if (veg[metric] > max) {
      max = veg[metric];
      submitter = veg.submitter;
    }
  }
  return submitter;
}
judgeVegetable(vegetables, metric);

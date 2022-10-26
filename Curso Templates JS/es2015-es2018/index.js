const max = 100000;
const iterable = new Array(max).fill(
  Math.floor(Math.random() * Math.floor(100))
);

function runFor() {
  let copy = [];
  for (let index = 0; index < iterable.length; index++) {
    copy.push(iterable[index]);
  }
  return copy;
}

function runForEach() {
  let copy = [];
  iterable.forEach((item) => {
    copy.push(item);
  });
  return copy;
}

function runMap() {
  let copy = iterable.map((item) => item);
  return copy;
}

function runForOf() {
  let copy = [];
  for (let index of iterable) {
    copy.push(iterable[index]);
  }
  return copy;
}

console.time("for");
console.log(runFor());
console.timeEnd("for");

console.time("foreach");
console.log(runForEach());
console.timeEnd("foreach");

console.time("map");
console.log(runMap());
console.timeEnd("map");

console.time("forof");
console.log(runForOf());
console.timeEnd("forof");

/**
 * For each
 * filter
 * map
 */

function forEach<T>(items: T[], forEachFunc: (item: T) => void): void {
  items.reduce((accumulator, value) => {
    forEachFunc(value);
    return undefined;
  }, undefined);
}

function filterFunction<T>(items: T[], filterFunc: (item: T) => boolean): T[] {
  return items.reduce(
    (filteredArray: T[], currentItem) =>
      filterFunc(currentItem) ? [...filteredArray, currentItem] : filteredArray,
    []
  );
}

console.log(
  filterFunction(["s", "s", "s", "", "", ""], (item) => !item.split("").length)
);
console.log(
  filterFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (item) => item % 2 === 0)
);

function mapFunction<T, K>(items: T[], mapFunc: (item: T) => K): K[] {
  return items.reduce(
    (filteredArray: K[], currentItem: T) => [
      ...filteredArray,
      mapFunc(currentItem),
    ],
    []
  );
}

console.log(
  mapFunction<number, string>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (item) =>
    (item * 10).toString()
  )
);

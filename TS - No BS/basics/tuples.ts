type ThreeDCoordinate = [x: number, y: number, z: number];
function add3DCoordinate(
  coordinateOne: ThreeDCoordinate,
  coordinateTwo: ThreeDCoordinate
): ThreeDCoordinate {
  return [
    coordinateOne[0] + coordinateTwo[0],
    coordinateOne[1] + coordinateTwo[1],
    coordinateOne[2] + coordinateTwo[2],
  ];
}

console.log(add3DCoordinate([1, 4, 5], [7, 8, 9]));

/**
 * React useState String uses tuples
 */

function simpleStringState(
  initial: string
): [() => string, (value: string) => void] {
  let stringState: string = initial;
  return [
    () => stringState,
    (value: string) => {
      stringState = value;
    },
  ];
}

const [firstName, setFirstName] = simpleStringState("Andrés");
const [secondName, setSecondName] = simpleStringState("David");
console.log(secondName());
console.log(firstName());
setFirstName("Andrés David");
console.log(firstName());
console.log(secondName());

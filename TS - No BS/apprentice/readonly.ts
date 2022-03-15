interface Cat {
  name: string;
  breed: string;
}

interface CatReadOnly {
  readonly name: string;
  readonly breed: string;
}

type ReadOnlyCat = Readonly<Cat>;

function makeCat(name: string, breed: string): ReadOnlyCat {
  return {
    name,
    breed,
  };
}

const usul = makeCat("usul", "Tabby");
//  Cannot assign to 'name' because it is a read-only property.
// usul.name = "a";

const michi: CatReadOnly = {
  name: "x",
  breed: "Pelao",
};

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

//Readonly tuple
const c1 = makeCoordinate(10, 20, 30);
//c1[0] = 60;

//Array inmutability
const reallyConst = [1, 2, 3] as const;
//reallyConst[0] = 50;

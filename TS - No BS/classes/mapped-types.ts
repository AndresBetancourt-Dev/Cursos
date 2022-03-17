/* type FlexibleDogInfo = {
  name: string;
} & Record<string, string>;

const dog: FlexibleDogInfo = {
  name: "LG",
  breed: "Mutt",
};
 */

interface Horse {
  age: number;
  name: string;
}

interface DogInfo {
  name: string;
  age: number;
}

interface LockedAccount {
  readonly id: string;
  readonly name: string;
}

type FlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};

/**
 * Infinite attributes/keys within types defined
 * In the previous example the values of the keys must be either boolean or Horse Interface
 */

const conforms: OnlyBoolsAndHorses = {
  allowAge: true,
  allowName: true,
  horse: {
    name: "Boca",
    age: 10,
  },
};

const dog: FlexibleDogInfo = {
  name: "LG",
  breed: "Mutt",
  age: 20,
  email: "lg@doggystyle.com",
};

type FeatureFlags = {
  darkMode: () => void;
} & {
  newUserProfile: () => void;
};

/**
 * Converts all propertys in the specified type
 */
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

//All boolean
type FeatureOptions = OptionsFlags<FeatureFlags>;
type DogInfoOptions = OptionsFlags<DogInfo>;

//Converts readonly to mutable object
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;

//Getters
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;

// Remove the 'kind' property
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
};

interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;

type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} & {
  //Union
  [Property in keyof Type as `on${Capitalize<
    string & Property
  >}Delete`]?: () => void;
};

function listenToObject<T>(_object: T, listeners: Listeners<T>): void {
  throw "Needs to be implemented";
}

const lg: DogInfo = {
  name: "Pluto",
  age: 5,
};

type DogInfoListeners = Listeners<DogInfo>;

listenToObject<DogInfo>(lg, {
  onNameChange: (value: string) => {},
  onAgeChange: (value: number) => {},
  onNameDelete: () => {},
  onAgeDelete: () => {},
});

const ff: FeatureFlags = {
  darkMode: () => {},
  newUserProfile: () => {},
};

listenToObject<FeatureFlags>(ff, {
  onDarkModeChange: () => {},
  onDarkModeDelete: () => {},
  onNewUserProfileChange: () => {},
  onNewUserProfileDelete: () => {},
});

/**
 * Pluck
 */

/**
 *
 * @param items Automatically asumes DataType of the given list
 * @param key Using the keyword extends keyof DataType automatically gaves me the Key that must be in DataType
 * @returns a Transformed array that returns the value of the key in the list of Elements
 */
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

interface Dog {
  name: string;
  age: number;
}

const dogs: Dog[] = [
  {
    name: "Mimi",
    age: 12,
  },
  {
    name: "LG",
    age: 13,
  },
];

/**
 * Get Names
 */
console.log(pluck(dogs, "name"));

/**
 * Get ages
 */
console.log(pluck(dogs, "age"));

/**
 * Event Map
 *
 */

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productId: string }; //Join Two Objects Anonymouse Type/interface
  checkout: BaseEvent;
}

/**
 *
 * @param name Name must be a Key of the Event Map Interface
 * @param data It's the Value of the Event Map Interface based on the given Name
 */
function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

const baseEvent: BaseEvent = {
  user: "bar",
  time: 50,
};

sendEvent("addToCart", {
  ...baseEvent,
  productId: "foo", //Requires { quantity: number; productId: string }  + BaseEvent
  quantity: 1000,
});

sendEvent("checkout", baseEvent);

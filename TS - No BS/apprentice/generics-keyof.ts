/**
 * Pluck
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
  addToCart: BaseEvent & { quantity: number; productId: string };
  checkout: BaseEvent;
}

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
  productId: "foo",
  quantity: 1000,
});

sendEvent("checkout", {
  ...baseEvent,
});

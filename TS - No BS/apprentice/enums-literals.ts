// const beforeLoad = "beforeLoad";
// const afterLoad = "afterLoad";
// const loading = "loading";
// const loaded = "loaded";

/**
 * Enum keyword to create a list of values
 * by default will be set to numbers from 0 > Infinity
 */
enum LoadingState {
  beforeLoad = "beforeLoad", //0
  afterLoad = "afterLoad", //1
  loading = "loading", //2
  loaded = "loaded", //3
}

/**
 * Use enum values as key for creating multiple objects based on them
 */
const englishLoadingStates = {
  [LoadingState.beforeLoad]: "Before Load",
  [LoadingState.afterLoad]: "After Load",
};

/**
 *
 * @param state Enum values in LoadingState, other will throw error
 * @returns boolean if the state it's the same as the enum value LoadingState.loading
 */
const isLoading = (state: LoadingState) => {
  return state === LoadingState.loading;
};

//Without Enums
//console.log(isLoading("dog"));
/*
Argument of type '"dog"' is not assignable to parameter of type 'LoadingState'. */

/**
 * Literal Types
 */

//Number Literal
//Literal 1 or 2 or 3 it only accepts those values
function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
}

//Bad Literal
//console.log(rollDice(4));
//Good Literal
console.log(rollDice(1));

/**
 *
 * @param name recieves only the values specified "checkout"/"addToCart" defined via function overloading
 * @param data recieves only objects that have the specified numeric attributes cartCount, productId, all return void
 */
function ecommerce(name: "checkout", data: { cartCount: number }): void;
function ecommerce(name: "addToCart", data: { productId: number }): void;
function ecommerce(name: string, data: unknown): void {
  console.log(`${name}  : ${JSON.stringify(data)}`);
}

ecommerce("checkout", { cartCount: 1 });
ecommerce("addToCart", { productId: 5 });

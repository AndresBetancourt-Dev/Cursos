// const beforeLoad = "beforeLoad";
// const afterLoad = "afterLoad";
// const loading = "loading";
// const loaded = "loaded";

enum LoadingState {
  beforeLoad = "beforeLoad", //0
  afterLoad = "afterLoad", //1
  loading = "loading", //2
  loaded = "loaded", //3
}

const englishLoadingStates = {
  [LoadingState.beforeLoad]: "Before Load",
  [LoadingState.afterLoad]: "After Load",
};

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

function sendEvent(name: "checkout", data: { cartCount: number }): void;
function sendEvent(name: "addToCart", data: { productId: number }): void;
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}  : ${JSON.stringify(data)}`);
}

sendEvent("checkout", { cartCount: 1 });
sendEvent("addToCart", { productId: 5 });

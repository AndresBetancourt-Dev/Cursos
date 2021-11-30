/**
 * Optional Parameters
 */

function printIngredients(
  quantity: string,
  ingredient: string,
  extraIngredient?: string
) {
  console.log(
    `${quantity} ${ingredient} ${extraIngredient ? extraIngredient : ""}`
  );
}

printIngredients("1C", "Flour");
printIngredients("1C", "Sugar", "something more");

/**
 * Optional Fields
 */

interface User {
  id: string;
  information?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.information) {
    return user.information.email!;
  }
  return "";
}

/**
 *
 * Optional Chaining
 * Nullish coalescing operator
 */

function getEmailEasy(user: User): string {
  return user?.information?.email ?? "";
}

/**
 * Optional Callbacks
 *
 */

type EmptyFunction = () => void;

function addWithCallback(x: number, y: number, callback?: EmptyFunction) {
  console.log([x, y]);
  callback?.();
}

addWithCallback(1, 5);

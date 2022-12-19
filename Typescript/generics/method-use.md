# Uso de los métodos y las propiedades de un tipo genérico

A la hora de usar variables de tipo para crear componentes genéricos, solo se pueden usar las propiedades y los métodos de los objetos que están disponibles para cada tipo. Esto impide que se produzcan errores al intentar realizar una operación con un valor de parámetro que es incompatible con el tipo que se le pasa.

Si se agrega la instrucción let result: T = value + value a la función identity, TypeScript genera el error La parte izquierda de una operación aritmética debe ser de tipo "any", "number", "bigint" o un tipo de enumeración porque no sabe qué valor se le pasará en tiempo de ejecución. Si se pasara un valor no numérico, la expresión generaría un error, por lo que TypeScript informa del problema en tiempo de compilación.

```ts
function identity<T, U>(value: T, message: U): T {
  let result: T = value + value; // Error
  console.log(message);
  return result;
}
```

## Uso de restricciones genéricas para limitar los tipos

La función identity puede aceptar cualquier tipo que decida pasar a las variables de tipo. Pero, en este caso, debe restringir los tipos que el parámetro value puede aceptar a un intervalo de tipos en el que puede realizar una operación de adición, en lugar de aceptar cualquier tipo posible. Esto se denomina restricción genérica.

Hay varias maneras de hacer esto en función de la variable de tipo. Una forma consiste en declarar un tipo (type) personalizado como una tupla y, después, extender (extend) la variable de tipo con el tipo personalizado. En el ejemplo siguiente se declara ValidTypes como una tupla con un valor string y un valor number. Después, extiende T con el nuevo tipo. De este modo, solo se pueden pasar tipos number o string a la variable de tipo.

```ts
type ValidTypes = string | number;

function identity<T extends ValidTypes, U>(value: T, message: U): T {
  let result: T = value + value; // Error
  console.log(message);
  return result;
}

let returnNumber = identity<number, string>(100, "Hello!"); // OK
let returnString = identity<string, string>("100", "Hola!"); // OK
let returnBoolean = identity<boolean, string>(true, "Bonjour!"); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.
```

También puede restringir un tipo a la propiedad de otro objeto. En este ejemplo se usa extends con el operador keyof, que toma un tipo de objeto y genera una unión literal de cadena o de valores numéricos de sus claves. Aquí se usa K extends keyof T para garantizar que el parámetro de clave es del tipo correcto para el tipo asignado a pet.

```ts
function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };

console.log(getPets(pets1, "fish")); // Returns 6
console.log(getPets(pets2, "3")); // Error
```

Obtendrá más información sobre el uso de restricciones genéricas con clases más adelante en este módulo.

## Uso de restricciones de tipos con genéricos

Observará que TypeScript todavía genera un error con la expresión value + value en la función identity. Pero ahora sabe que solo los tipos number y string se pueden pasar a la función.

Puede usar la restricción de tipos typeof en un bloque if para comprobar el tipo del parámetro value antes de realizar una operación, tal y como se muestra en el ejemplo siguiente. A partir de la instrucción if, TypeScript puede determinar si la operación funcionará con los valores proporcionados en el bloque.

```ts
type ValidTypes = string | number;
function identity<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = identity<number, string>(100, 'Hello');
let stringValue = identity<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100
```

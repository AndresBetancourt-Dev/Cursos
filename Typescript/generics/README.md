# Introducción a los genéricos

En los módulos anteriores de la ruta de aprendizaje Compilación de aplicaciones JavaScript con TypeScript, aprendió a aplicar anotaciones de tipo a las interfaces, funciones y clases para crear componentes fuertemente tipados. Pero ¿qué ocurre si quiere crear un componente que funcione con una variedad de tipos en lugar de solo con uno? Puede usar el tipo any, pero entonces no podrá aprovechar la ventaja del sistema de comprobación de tipos de TypeScript.

Los genéricos son plantillas de código que puede definir y reutilizar en todo el código base. Proporcionan una manera de indicar a las funciones, clases o interfaces qué tipo quiere usar al llamarlas. Esto es similar a los argumentos que se pasan a una función, salvo en que un genérico le permite indicar al componente qué tipo debe esperar en el momento en que se llama.

Cree funciones genéricas cuando el código sea una función o una clase que:

Funcione con varios tipos de datos.
Use ese tipo de datos en varios lugares.
Los genéricos pueden:

Proporcionar más flexibilidad a la hora de trabajar con tipos.
Permitir la reutilización de código.
Reducir la necesidad de usar el tipo any.

# ¿Por qué usar genéricos?

Para entender por qué podría necesitar hacerlo, resulta útil ver un ejemplo.

La función getArray genera una matriz de elementos de tipo any.

```ts
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}
```

Después, la variable numberArray se declara mediante una llamada a la función getArray, en la que se le pasa una matriz de números, y la variable stringArray se declara con una matriz de cadenas. Pero dado que se usa el tipo any, no hay nada que impida que el código inserte una cadena (string) en numberArray o un número (number) en stringArray.

```ts
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
numberArray.push(25); // OK
stringArray.push("Rabbits"); // OK
numberArray.push("This is not a number"); // OK
stringArray.push(30); // OK
console.log(numberArray); // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray); // ["Cats", "Dogs", "Birds", "Rabbits", 30]
```

¿Qué ocurre si quiere especificar el tipo de los valores que contendrá la matriz cuando llame a la función? ¿Y si quiere que TypeScript realice después la comprobación de tipos de los valores que se pasan para asegurarse de que son del tipo especificado? Aquí es donde entran en juego los genéricos.

En este ejemplo se vuelve a escribir la función getArray mediante genéricos. De este modo, la matriz puede aceptar cualquier tipo que se especifique al llamar a la función.

```ts
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
```

Los genéricos definen una o varias variables de tipo entre corchetes angulares (< >) para identificar el tipo o los tipos que se van a pasar al componente. Como verá, las variables de tipo también se conocen como parámetros de tipo o parámetros genéricos. En el ejemplo anterior, a la variable de tipo de la función se le denomina <T>. T es un nombre común para un genérico, pero puede asignarle el nombre que quiera.

Después de especificar la variable de tipo, puede usarla en vez del tipo en los parámetros, en el tipo de valor devuelto o en cualquier otro lugar de la función en el que agregaría una anotación de tipo.

<img src="https://learn.microsoft.com/es-mx/training/modules/typescript-generics/media/m06-generics.png" alt="Generics">

La variable de tipo "T" se puede usar siempre que se necesite una anotación de tipo. En la función "getArray", se usa para especificar el tipo del parámetro "items" y el tipo de valor devuelto de la función, así como para devolver una nueva matriz de elementos.

Para llamar a la función y pasarle un tipo, anexe <type> al nombre de la función. Por ejemplo, getArray<number> indica a la función que solo acepte una matriz de valores numéricos (number) y que devuelva una matriz de valores numéricos (number). Dado que el tipo se ha especificado como number, TypeScript esperará que se pasen valores number a la función y producirá un error si se pasan otros valores.

En este ejemplo, con las declaraciones de variable para numberArray y stringArray actualizadas para llamar a la función con el tipo deseado, TypeScript evita que se agreguen elementos no válidos a la matriz.

```ts
let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);                      // OK
numberArray.push('This is not a number');  // Generates a compile time type check error

let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');               // OK
stringArray.push(30);                      // Generates a compile time type check error
```

## Uso de varias variables de tipo
No está limitado a usar una única variable de tipo en los componentes genéricos.

Por ejemplo, la función identity acepta dos parámetros, value y message, y devuelve el parámetro value. Puede usar dos genéricos, T y U, para asignar distintos tipos a cada parámetro y al tipo de valor devuelto. La variable returnNumber se inicializa mediante una llamada a la función identity con <number, string> como tipos para los argumentos value y message; returnString se inicializa llamando a la función con <string, string>; y returnBoolean se inicializa llamándola con <boolean, string>. Al usar estas variables, TypeScript puede comprobar el tipo de los valores y devolver un error en tiempo de compilación si hay un conflicto.

```ts
function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'
```
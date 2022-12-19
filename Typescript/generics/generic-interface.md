# Ejercicio: Implementación de genéricos con interfaces y clases

Los genéricos son una forma de pasar tipos a un componente, por lo que no solo se pueden aplicar tipos nativos a variables de tipo genérico, sino también a interfaces, funciones y clases. En esta unidad, conocerá varias maneras diferentes de usar genéricos con estos tipos complejos.

Pruebe a usar genéricos con interfaces, funciones y clases. Todos códigos de ejemplo llevan a cabo esencialmente las mismas tareas con distintos enfoques.

## Declaración de una interfaz genérica

Puede usar genéricos en una declaración de interfaz reemplazando las anotaciones de tipo por variables de tipo.

Abra el área de juegos y quite cualquier código existente.

Declare una interfaz simple denominada Identity que tenga dos propiedades, value y message, y dos variables de tipo genérico, T y U, para los tipos de las propiedades.

```ts
interface Identity<T, U> {
  value: T;
  message: U;
}
```

Declare dos variables usando la interfaz Identity como un tipo de objeto.

```ts
let returnNumber: Identity<number, string> = {
  value: 25,
  message: "Hello!",
};
let returnString: Identity<string, number> = {
  value: "Hello!",
  message: 25,
};
```

## Declaración de una interfaz genérica como un tipo de función

También puede declarar una interfaz genérica como un tipo de función.

Continúe trabajando en el área de juegos.

Declare una interfaz genérica denominada ProcessIdentity que incluya la signatura genérica de un método, (value: T, message: U): T. Observe que el método no tiene nombre. De esta manera, puede aplicarlo a cualquier función con una signatura de tipo coincidente.

```ts
interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}
```

Declare una función llamada processIdentity que tenga la misma signatura de tipo que la interfaz ProcessIdentity.

```ts
function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}
```

Declare una variable de tipo de función denominada processor con la interfaz ProcessIdentity como el tipo de variable, y pase number para el tipo T y string para el tipo U. Después, asígnele la función processIdentity. Puede usar esta variable como una función en el código y TypeScript comprobará los tipos.

```ts
let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, "Hello!"); // OK
let returnString1 = processor("Hello!", 100); // Type check error
```

## Declaración de una interfaz genérica como un tipo de clase

También puede declarar una interfaz genérica e implementarla en una clase.

Continúe trabajando en el área de juegos.

Declare una interfaz denominada ProcessIdentity que tenga dos propiedades, value y message, y dos variables de tipo genérico, T y U, para los tipos de las propiedades. Después, agregue una signatura genérica de un método denominado process que devuelva un valor del tipo T.

```ts
interface ProcessIdentity<T, U> {
  value: T;
  message: U;
  process(): T;
}
```

Defina una clase genérica denominada processIdentity que implemente la interfaz ProcessIdentity. En este caso, asigne a los tipos de variable de la clase processIdentity los nombres X e Y. Puede usar nombres de variable diferentes en la interfaz y en la clase porque el valor del tipo se propaga y el nombre de la variable no importa.

```ts
class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
  value: X;
  message: Y;
  constructor(val: X, msg: Y) {
    this.value = val;
    this.message = msg;
  }
  process(): X {
    console.log(this.message);
    return this.value;
  }
}
```

Declare una nueva variable y asígnele un nuevo objeto processIdentity; para ello, pase number y string para los tipos de variable X e Y, y number y string como valores de argumento.

```ts
let processor = new processIdentity<number, string>(100, "Hello");
processor.process(); // Displays 'Hello'
processor.value = "100"; // Type check error
```

## Definición de una clase genérica

También puede declarar una clase genérica sin una interfaz. En este ejemplo se declara processIdentity como una clase genérica sin implementar la interfaz ProcessIdentity.

```ts
class processIdentity<T, U> {
  private _value: T;
  private _message: U;
  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }
  getIdentity(): T {
    console.log(this._message);
    return this._value;
  }
}
let processor = new processIdentity<number, string>(100, "Hello");
processor.getIdentity(); // Displays 'Hello'
```

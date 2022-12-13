# Información general de tipos en TypeScript

La principal ventaja de Typescript es que permite agregar tipos estáticos al código de JavaScript. Los tipos colocan restricciones estáticas en entidades de programa, como funciones, variables y propiedades, de tal modo que los compiladores y las herramientas de desarrollo puedan ofrecer una mejor comprobación y asistencia durante el desarrollo.

El sistema de tipos estáticos en tiempo de compilación de TypeScript modela estrechamente el sistema de tipos dinámicos en tiempo de ejecución de JavaScript, lo que permite expresar con precisión las relaciones de tipo que se espera que existan cuando se ejecutan los programas y se tienen las suposiciones que el compilador de TypeScript ha validado previamente. El análisis de tipos de TypeScript se produce por completo en tiempo de compilación y no agrega sobrecarga en tiempo de ejecución a la ejecución del programa.

Los tipos estáticos también proporcionan una manera de documentar mejor la intención del código, lo que le permitirá a usted y a otros desarrolladores comprenderlo.

## Declaración de variables let y const

ECMAScript 2015 ha agregado las palabra clave let y const para la declaración de variables en JavaScript, que ha eliminado algunos de los problemas asociados con la palabra clave var en versiones anteriores. Este cambio permite declarar variables con ámbito de nivel de bloque y evita que se declare la misma variable varias veces.

TypeScript fomenta el uso de las palabras clave let y const para las declaraciones de variables.

## Ejercicio: Inferencia de tipo en TypeScript
Puede asociar tipos con variables mediante anotaciones de tipo explícitas o la inferencia de tipos implícita.

Aunque se recomienda, las anotaciones de tipo explícitas son opcionales en TypeScript. Para ello, use la sintaxis variableName: type. Esta instrucción let myVariable: number declara la variable como un tipo de número sin inicializarla. Como alternativa, también puede inicializar la variable mediante let myVariable: number = 10.

Para implicar el tipo de variable mediante la inferencia de tipos, basta con usar el mismo formato que se usa en JavaScript. Por ejemplo, let myVariable = 10 infiere que la variable es de tipo number porque se inicializa con el valor 10.

Vamos a abrir el área de juegos para ver cómo funciona esto.

```ts
let x: number;   //* Explicitly declares x as a number type
let y = 1;       //* Implicitly declares y as a number type
let z;           //* Declares z without initializing it
```

```ts
any
unknown

/* Primitives */
number
boolean
string
enum
void
null
undefined
bigint

/* Object */
object
class
interface

/* NULL */
null
undefined

```
### Tipos primitivos
Los tipos primitivos son los tipos boolean, number, string, void, null y undefined, junto con enumeración definida por el usuario o tipos enum. El tipo void existe únicamente para indicar la ausencia de un valor, como en una función sin ningún valor devuelto. Los tipos null y undefined son subtipos de todos los demás tipos. No es posible hacer referencia explícita a los tipos null y undefined. Solo se puede hacer referencia a los valores de esos tipos mediante los literales null y undefined.

Tipos de objeto y parámetros de tipo
Los tipos de objeto son todos los tipos de clase, de interfaz, de matriz y literales (todo lo que no sea un tipo primitivo).

Los tipos de clase e interfaz se introducen mediante las declaraciones de clase e interfaz, y se hace referencia a ellos con el nombre que se les ha asignado en sus declaraciones. Los tipos de clase e interfaz pueden ser tipos genéricos que tienen uno o más parámetros de tipo. Obtendrá más información sobre estos tipos de objeto en módulos posteriores.


### Boolean
```ts
let flag: boolean;
let yes = true;
let no = false;
```

### Number
```ts
let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;
```

### String
```ts
let s: string;
let empty = "";
let abc = 'abc';
let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);
```

### Los tipos void, null y undefined
JavaScript y TypeScript tienen dos valores primitivos que se usan para indicar un valor ausente o con inicialización anulada: null y undefined. Estos tipos son más útiles en el contexto de las funciones, por lo que se tratarán con más detalle en un módulo posterior.
# Creación de funciones en TypeScript

En JavaScript, las definiciones de funciones no especifican los tipos de datos para los parámetros, no realizan la comprobación de tipos en los argumentos pasados y no comprueban el número de argumentos recibidos. Por lo tanto, hay que agregar la lógica para comprobar estos parámetros en las funciones.

TypeScript simplifica el desarrollo de funciones y facilita la solución de problemas, ya que permite escribir parámetros y valores devueltos. TypeScript también agrega nuevas opciones para los parámetros. Por ejemplo, aunque todos los parámetros son opcionales en las funciones de JavaScript, puede optar por hacer que los parámetros sean necesarios u opcionales en TypeScript.

Agregar tipos a funciones ayuda a evitar que se pasen valores que no se deberían pasar a las funciones. Esto es especialmente importante cuando se trabaja con bases de código o funciones más grandes desarrolladas por otros usuarios. Aunque agregar tipos es una diferencia sencilla, ofrece la ventaja de comprobar el tipo de los valores que se pasan a la función y lo que se devuelve. En lugar de tener que agregar toda la lógica a la función para comprobar que se ha pasado el tipo de valor adecuado y el valor devuelto es correcto, TypeScript ayuda a garantizar los tipos de valor correctos a medida que desarrolla el código. Además, al crear la lógica de la función, podrá disfrutar de la funcionalidad de autocompletar, ya que el editor conocerá el tipo de datos de los parámetros: algo que JavaScript no suele ser capaz de detectar. Esto es especialmente útil cuando se usan funciones desarrolladas por otros, ya que TypeScript clarifica los tipos de entrada y salida necesarios.

Como en JavaScript, puede definir funciones de TypeScript de varias maneras diferentes. Echemos un vistazo a cómo estas funciones difieren en lo que respecta a agregar tipos en TypeScript.

## Funciones con nombre

Una función con nombre es una declaración de función escrita con la palabra clave function que se proporciona con un nombre distinto en el ámbito actual. Las declaraciones de función con nombre se cargan en el contexto de ejecución antes de que se ejecute el código. Esto se conoce como "elevación", lo que significa que puede usar la función antes de declararla.

La sintaxis para declarar una función con nombre en TypeScript es la misma que para definir una en JavaScript. La única diferencia con TypeScript es que puede proporcionar una anotación de tipo para los parámetros de la función y el valor devuelto.

Esta función acepta dos parámetros de tipo number y devuelve un valor number.

TypeScript

```ts
function addNumbers(x: number, y: number): number {
  return x + y;
}

addNumbers(1, 2);
```

## Funciones anónimas

Una expresión de función (o función anónima) es una función que no está cargada previamente en el contexto de ejecución y solo se ejecuta cuando el código la encuentra. Las expresiones de función se crean en tiempo de ejecución y se deben declarar antes de que se puedan llamar. Esto significa que no se elevan, a diferencia de las declaraciones de función con nombre que se elevan en cuanto se inicia la ejecución del programa y se pueden llamar antes de su declaración.

Las expresiones de función representan valores, de modo que normalmente se asignan a una variable o se pasan a otras funciones, y pueden ser anónimas, lo que significa que la función no tiene nombre.

En este ejemplo se asigna una expresión function a la variable addNumbers. Observe que esa función aparece en lugar del nombre de la función, lo que hace que la función sea anónima. Ahora puede usar esta variable para llamar a la función.

```ts
let addNumbers = function (x: number, y: number): number {
  return x + y;
};
addNumbers(1, 2);
```

Esto muestra el aspecto de la función con nombre sum cuando se escribe como una función anónima. Observe que el nombre add se ha reemplazado por la función y que la función se ha implementado como una expresión en una declaración de variable.

```ts
let total = function (input: number[]): number {
  let total: number = 0;
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
};

console.log(total([1, 2, 3]));
```

Al igual que antes, podrá usar la comprobación de tipos e IntelliSense al usar funciones anónimas. En este ejemplo también observará que la variable total no tiene tipo, pero TypeScript puede determinar su tipo a través de algo llamado "tipos contextuales", una forma de inferencia de tipos. Esto puede reducir la cantidad de esfuerzo necesario para mantener el programa escrito.

## Funciones de flecha

Las funciones de flecha (también denominadas "expresión lambda" o "funciones de flecha Fat" debido al operador => usado para definirlas) proporcionan una sintaxis abreviada para definir una función anónima. Debido a su naturaleza concisa, las funciones de flecha se usan a menudo con funciones sencillas y en algunos escenarios de control de eventos.

En este ejemplo se compara la sintaxis de una función function anónima con una función de flecha de una sola línea. La función de flecha abrevia la sintaxis omitiendo la palabra clave de la función y agregando el operador => entre los parámetros y el cuerpo de la función.

```ts
// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
  return x + y;
};

// Arrow function
let addNumbers2 = (x: number, y: number): number => x + y;
```

En este ejemplo, observe también que las llaves se han quitado y no hay ninguna instrucción return. Las funciones de flecha de una sola línea pueden usar una sintaxis de cuerpo concisa o una devolución implícita, que permite la omisión de llaves y la palabra clave return.

Si el cuerpo de la función tiene más de una línea, enciérrelo entre llaves e incluya la declaración return (si procede). En este ejemplo se muestra el aspecto de la función anónima del ejemplo anterior cuando se escribe como una función de flecha.

```ts
let total2 = (input: number[]): number => {
  let total: number = 0;
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
};
```

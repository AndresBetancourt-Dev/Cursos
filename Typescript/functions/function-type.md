# Definición de tipos de funciones

Puede definir los tipos de funciones y usarlos en las funciones. Esto resulta útil si desea aplicar la misma signatura de tipo de función a más de una función.

Puede definir un tipo de función mediante un alias de tipo o una interfaz. Ambos enfoques funcionan esencialmente de la misma forma, por lo que tendrá que decidir cuál es el mejor. Una interfaz es mejor si desea tener la opción de extender el tipo de función. Un alias de tipo es mejor si desea utilizar uniones o tuplas.

Supongamos que está creando una función que realiza una operación de suma o una operación de resta según el valor de un parámetro que se le pasa. Las operaciones de suma y resta aceptan dos números, x y y, y devuelven el resultado como un número.

Abra el área de juegos y quite cualquier código.

Defina un tipo de función llamado calculator mediante un alias de tipo. La signatura de tipo tiene una lista de parámetros (x: number, y: number) y devuelve un valor number, separados por un operador de flecha (=>). Observe que la sintaxis de la signatura de tipo es la misma que una función de flecha.

```ts
type calculator = (x: number, y: number) => number;
```

Ahora puede usar el tipo de función como una firma de tipo al declarar funciones. Declare dos variables del tipo de función calculator, una para la operación de suma y otra para la de resta. Pruebe las nuevas funciones devolviendo el resultado de cada una de ellas a la consola.

```ts
let addNumbers: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));
```

También puede utilizar el tipo de función calculator para pasar valores de otra función. Escriba la función doCalculation, que devuelve el resultado de la función addNumbers o subtractNumbers según el valor pasado al parámetro operation.

```ts
let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}
```

Pruebe a ejecutar la función escribiendo console.log(doCalculation('add')(1, 2)) y observará que TypeScript puede mostrar la ayuda de IntelliSense en función de los tipos definidos en doCalculation y calculator.

Ahora, marque como comentario el tipo de función calculator y declare uno nuevo mediante una interfaz. Observe que la signatura de tipo es ligeramente diferente, con dos puntos (:) que separan la lista de parámetros y el tipo de valor devuelto en lugar del operador de flecha. Reemplace la función calculator por la interfaz Calculator en las declaraciones de variables. Cuando haya terminado, el código debería funcionar igual.

```ts
// type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
}
```

## Inferencia de tipos de funciones
Al definir una función, no es necesario que los nombres de los parámetros de la función coincidan con los del tipo de función. Aunque es necesario asignar un nombre a los parámetros de la signatura de tipo en ambos lugares, los nombres se omiten al comprobar si dos tipos de funciones son compatibles.

También puede dejar excluir los tipos de parámetros y el tipo de valor devuelto, ya que TypeScript los inferirá del tipo de función.

En lo que respecta a TypeScript, estas tres instrucciones son idénticas.

```ts
let addNumbers: Calculator = (x: number, y: number): number => x + y;
let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
let addNumbers: Calculator = (num1, num2) => num1 + num2;
```
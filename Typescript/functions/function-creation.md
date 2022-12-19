# Ejercicio: Creación de funciones

En este ejercicio, creará dos funciones con nombre con valores devueltos y parámetros fuertemente tipados.

Abra el área de juegos y quite cualquier código.

Copie la siguiente función de JavaScript en el área de juegos. Observe que el parámetro message tiene implícitamente un tipo any.

```ts
function displayAlert(message) {
  //Parameter 'message' implicitly has an 'any' type, but a better type may be inferred from usage.
  alert("The message is " + message);
}
```

Ahora, asigne el tipo string al parámetro message. Esta función con nombre no devuelve un valor para que pueda excluir el tipo de valor devuelto (también puede pasar void como el tipo de valor devuelto, pero no es necesario hacerlo).

```ts
function displayAlert(message: string) {
  alert("The message is " + message);
}
```

Pruebe a llamar a la función, pasando string como parámetro. Ahora, pruebe a pasar un valor number. El tipo de TypeScript comprueba el parámetro y le notifica el conflicto. En función de lo que esté intentando realizar con esta función, puede poner el número entre comillas, expandir los tipos de valores aceptados por el parámetro con un tipo de unión (por ejemplo, msg: string | number) o agregar lógica a la función para controlar los distintos tipos de valores que se le pasan.

Este es otro ejemplo. La función sum suma los números de una matriz y devuelve el resultado. Copie el siguiente código JavaScript en el área de juegos.

```ts
function sum(input) {
  let total = 0;
  for (let count = 0; count < input.length; count++) {
    if (isNaN(input[count])) {
      continue;
    }
    total += Number(input[count]);
  }
  return total;
}
```

Pruebe a llamar a la función con un solo número como parámetro; por ejemplo, sum(5). Acepta el valor, pero no devuelve el resultado correcto porque el parámetro no se pasa como una matriz.

Ahora, establezca el tipo del parámetro input en una matriz de valores number, luego, el tipo de valor devuelto de la función en number y, a continuación, escriba la variable total.

```ts
function sum(input: number[]): number {
  let total: number = 0;
  for (let count = 0; count < input.length; count++) {
    if (isNaN(input[count])) {
      continue;
    }
    total += Number(input[count]);
  }
  return total;
}
```

TypeScript ahora marca el problema de tipo con el parámetro. Pruebe a llamar a la función con una matriz de valores; por ejemplo, sum([1, 'two', 3]). Ahora debería devolver la respuesta correcta. Observe también que los valores dentro de la matriz tienen el tipo comprobado.

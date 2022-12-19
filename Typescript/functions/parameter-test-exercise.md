# Ejercicio: Pruebas con parámetros

En este ejercicio, creará funciones que tienen parámetros necesarios, opcionales y predeterminados.

## Parámetros obligatorios
Abra el área de juegos y quite cualquier código.

Escriba la siguiente función de flecha, que acepta tres parámetros necesarios.

```ts
let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;
```
Pruebe a llamar a la función escribiendo addThreeNumbers(10, 20). TypeScript genera el error Se esperaban 3 argumentos, pero obtuvo 2. No se proporcionó un argumento para "z". Cuando se ejecuta, la función devuelve NaN porque el tercer argumento se ha pasado como undefined, lo que hace que el cálculo no sea válido.

¿Qué ocurre al escribir addThreeNumbers(10, 20, 30, 40)? TypeScript genera el error Se esperaban 3 argumentos, pero obtuvo 4. Cuando se ejecuta, el cuarto argumento se quita y la función devuelve 60.

### Parámetros opcionales
En la función, pruebe a convertir el y parámetro en opcional. ¿Qué sucede?

```ts
let addThreeNumbers = (x: number, y?: number, z: number): number => x + y + z;
```

TypeScript genera un error porque la posición de los parámetros opcionales es importante. En la lista de parámetros, los parámetros opcionales deben seguir todos los parámetros necesarios. En lugar del parámetro y, pruebe a convertir el parámetro z en opcional. Además, para que esta función devuelva el valor correcto, también debe actualizarla para abordar la posibilidad de que z se pueda pasar como undefined. Ahora debería poder llamar a la función mediante addThreeNumbers(10, 20) o addThreeNumbers(10, 20, 30).

```ts
let addThreeNumbers = (x: number, y: number, z?: number): number => {
    if((z === undefined)) {
        return x + y;
    } else {
        return x + y + z;
    }
};
```

## Parámetros predeterminados
Escriba la siguiente función de flecha, que acepta tres parámetros necesarios.

```ts
let subtractThreeNumbers = (x: number, y: number, z: number): number => x - y - z;
```

Asigne un valor predeterminado de 100 al parámetroz reemplazando por z: numberz = 100.

```ts
let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;
```

Pruebe a llamar a la función con dos y tres argumentos para probar el resultado.

```ts
subtractThreeNumbers(10, 20);       // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbers(10, 20, 15);   // returns -25
```

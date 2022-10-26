# Hands-on ECMAScript 2015+

En la siguiente actividad pondremos en práctica algunos de los métodos de bucles e iteración de ECMAScript 2015+ para comparar su sintaxis y rendimiento con soluciones similares de versiones anteriores del estándar.

## Instrucciones (Entorno)

1. **Crear un archivo HTML** y agregar la estructura básica del documento. Luego **Agrega una etiqueta `script`** para escribir allí el código de la actividad.
2. **Almacena la cantidad de elementos a iterar** en una constante `const max = 100000`. _Luego podrás hacer modificaciones en este valor para evaluar los cambios en los tiempos de respuesta._
3. **Crea el arreglo de elementos a iterar** en otra constante `const iterable = new Array(max)`.
4. **Inserta un valor aleatorio en cada posición** del arreglo agregando `.fill(Math.floor(Math.random() * Math.floor(100)))` al final de la declaración anterior.

## Instrucciones (Lógica)

```
function runFor() {
let copy = []
for (let i = 0; i copy.push(iterable[i])
}
return copy
}
```

1. Siguiendo el ejemplo de la función `runFor()` detallada anteriormente, **crea las versiones del mismo script** utilizando el método [`forEach`][1], el método [`map`][2] y el bucle [`for..of`][3] en funciones llamadas `runForEach()`, `runMap()` y `runForOf()` respectivamente.
2. **Calcula el tiempo de respuesta** de cada función utilizando `console.time()` como se muestra en el ejemplo a continuación.

```
console.time('for')
console.log(runFor())
console.timeEnd('for')
```

## Conclusión

1. ¿Cuál método es el más eficiente en materia de velocidad de respuesta?
2. ¿Cuál método ofrece la sintaxis más clara a la hora de redactar la función?
3. Si tuvieras que priorizar entre estos aspectos, ¿con cuál método te quedarías?

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
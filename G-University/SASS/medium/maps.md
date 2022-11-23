# Mapas

Los mapas son asociaciones de claves y valores. La clave se utiliza para acceder fácilmente al valor de cualquier elemento del mapa. Se utilizan principalmente para agrupar valores y acceder a ellos dinámicamente. En CSS no existe ningún elemento equivalente a los mapas, pero su sintaxis es similar a las expresiones media query:

```scss
$map: (
  clave1: valor1,
  clave2: valor2,
  clave3: valor3,
);
```

A diferencia de las listas, los mapas siempre se encierran con paréntesis y los pares clave: valor deben separarse con comas. Tanto las claves como los valores de los mapas pueden utilizar cualquier función o expresión de SassScript. Las claves de un mapa deben ser únicas, por lo que si quieres asociar varios valores a una misma clave, debes utilizar una lista.

Al igual que sucede con las listas, los mapas se pueden manipular mediante funciones de SassScript. La función map-get() por ejemplo busca un valor dentro del mapa a partir de la clave indicada y la función map_merge() añade nuevos pares clave: valor a un mapa existente. Además, la directiva @each se puede emplear para aplicar estilos a cada par clave: valor de un mapa.

Los mapas también se pueden utilizar en cualquier función preparada para manipular listas. Si pasas un mapa a una función que espera una lista, el mapa se transforma primero en un lista de pares de valores. Así por ejemplo, si pasas el mapa (clave1: valor1, clave2: valor2) a una función para listas, este se transforma automáticamente en clave1 valor1, clave2 valor2. Lo contrario no es cierto, ya que no puedes utilizar listas en las funciones preparadas para mapas. La única excepción es la lista vacía (), que representa tanto a un mapa vacío como a una lista vacía.

Los mapas no se pueden convertir directamente a código CSS. Por tanto, si utilizar un mapa como valor de una variable o como argumento de una función CSS, Sass mostrará un mensaje de error.
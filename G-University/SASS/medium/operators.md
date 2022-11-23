# Operadores
Todos los tipos de datos soportan el operador de igualdad (== y !=) para comprobar si dos valores son iguales o distintos. Además, cada tipo de dato define otros operadores propios.

```scss
    == || !=
```


## Operadores para números
SassScript soporta los cinco operadores aritméticos básicos: suma +, resta -, multiplicación *, división / y módulo %. El operador módulo calcula el resto de la división sin decimales (ejemplo: 5 módulo 2 = 1, % % 2 = 1). Además, si realizas operaciones sobre números con diferentes unidades, Sass convertirá automáticamente las unidades siempre que sea posible:

```scss
p {
  width: 1in + 8pt;
}
//El código Sass anterior se compila de la siguiente manera:

p {
  width: 1.111in;
}
```

Con los números también se pueden utilizar los operadores relacionales (<, >, <=, >=) y los de igualdad (==, !=).

## El problema del carácter / con la división de números
CSS permite el uso del carácter / para separar números. Como Sass es totalmente compatible con la sintaxis de CSS, debe soportar el uso de esta característica. El problema es que el carácter / también se utiliza para la operación matemática de dividir números. Por todo esto, si utilizas el carácter / para separar dos números en SassScript, en el archivo CSS compilado aparecerán tal cual los has escrito.

No obstante, existen tres situaciones en las que el carácter / siempre se interpreta como una división matemática:

Si uno de los operandos de la división es una variable o el resultado devuelto por una función.
Si el valor está encerrado entre paréntesis.
Si el valor se utiliza como parte de una expresión matemática.
Ejemplo:

```scss
p {
  // El carácter '/' se interpreta como código CSS normal
  font: 10px/8px;
  $width: 1000px;

  // El carácter '/'  se interpreta como una división
  width: $width/2;        // Uno de los operandos es una variable
  width: round(1.5)/2;    // Uno de los operados es el resultado de una función
  height: (500px/2);      // Los parénteis encierran la expresión
  margin-left: 5px + 8px/2px; // El '+' indica que es una expresión matemática
}
```

El código Sass anterior se compila de la siguiente manera:

```css
p {
  font: 10px/8px;
  width: 500px;
  height: 250px;
  margin-left: 9px;
}
```

Si quieres utilizar el carácter / normal de CSS incluso cuando empleas variables, encierra las variables con #{}. Ejemplo:

```scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```
El código Sass anterior se compila de la siguiente manera:

```css
p {
  font: 12px/30px;
}
```

## Operadores para colores
Los operadores aritméticos también se pueden aplicar a los valores que representan colores. En este caso, los cálculos siempre se realizan sobre cada componente del color. Esto significa que antes de cada operación, el color se descompone en sus tres componentes R, G y B, para después aplicar la operación a cada componente. Ejemplo:

```scss
p {
  color: #010203 + #040506;
}
```

Las tres operaciones realizadas son 01 + 04 = 05, 02 + 05 = 07 y 03 + 06 = 09, por lo que el código CSS compilado resultante es:

```css
p {
  color: #050709;
}
```
En la mayoría de los casos, es mejor utilizar las funciones especiales de SassScript para colores que se explicarán más adelante, en vez de realizar operaciones matemáticas sobre ellos.

Las operaciones matemáticas también se pueden realizar combinando colores y números. Ejemplo:

```scss
p {
  color: #010203 * 2;
}
```

Las tres operaciones realizadas son 01 * 2 = 02, 02 * 2 = 04 y 03 * 2 = 06, por lo que el código CSS compilado resultante es:
```css
p {
  color: #020406;
}
```

Si realizas operaciones sobre colores que incluyen un canal alpha (por ejemplo los que han sido creados con las funciones rgba() o hsla()) los dos colores deben tener el mismo valor alpha para poder realizar la operación con éxito. El motivo es que los cálculos no afectan al valor alpha. Ejemplo:

```scss
p {
  color: rgba(255, 0, 0, 0.75) + rgba(0, 255, 0, 0.75);
}
```

El código CSS compilado resultante es:

```css
p {
  color: rgba(255, 255, 0, 0.75);
}
```

El canal alpha de un color se puede ajustar con la función opacify() o transparentize(). Ejemplo:

```scss
$translucent-red: rgba(255, 0, 0, 0.5);

p {
  color: opacify($translucent-red, 0.3);
  background-color: transparentize($translucent-red, 0.25);
}
````

El código Sass anterior se compila de la siguiente manera:

```css
p {
  color: rgba(255, 0, 0, 0.8);
  background-color: rgba(255, 0, 0, 0.25);
}
```
Los filtros de Internet Explorer requieren que todos los colores incluyan una capa alpha, y que lo hagan siguiendo estrictamente el formato #AABBCCDD. Para convertir fácilmente un color a ese formato, utiliza la función ie_hex_str(). Ejemplo:

```scss
$translucent-red: rgba(255, 0, 0, 0.5);
$green: #00ff00;

div {
  filter: progid:DXImageTransform.Microsoft.gradient(
    enabled='false',
    startColorstr='#{ie-hex-str($green)}',
    endColorstr='#{ie-hex-str($translucent-red)}'
  );
}
````

El código Sass anterior se compila de la siguiente manera:

```css
div {
  filter: progid:DXImageTransform.Microsoft.gradient(enabled='false', startColorstr=#FF00FF00, endColorstr=#80FF0000);
}
```

6.4.3. Operadores para cadenas de texto
El operador + se puede utilizar para concatenar dos o más cadenas de texto:

```scss
p {
  cursor: e + -resize;
}
```


El código Sass anterior se compila de la siguiente manera:

```css
p {
  cursor: e-resize;
}
```

Si la cadena que está a la izquierda del operador + está encerrada por comillas, el resultado de la operación será una cadena con comillas. Igualmente, si la cadena de la izquierda no tiene comillas, el resultado será una cadena sin comillas. Ejemplo:

```scss
p:before {
  content: "Foo " + Bar;
  font-family: sans- + "serif";
}
```

El código Sass anterior se compila de la siguiente manera:


```css
p:before {
  content: "Foo Bar";
  font-family: sans-serif;
}
```
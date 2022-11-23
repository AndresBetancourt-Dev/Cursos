# Data Types

SassScript soporta seis tipos de datos:

- Números (ejemplo: 1.2, 13, 10px)
- Cadenas de texto con o sin comillas simples o dobles (ejemplo "foo", 'bar', baz)
- Colores (ejemplo blue, #04a3f9, rgba(255, 0, 0, 0.5))
- Valores lógicos o booleanos (ejemplo true, false)
- Valores nulos (ejemplo null)
- Listas de valores, separados por espacios en blanco o comas (ejemplo 1.5em 1em 0 2em, Helvetica, Arial, sans-serif)
- Pares formados por una clave y un valor separados por : (ejemplo (key1: value1, key2: value2))

SassScript también soporta todos los otros tipos de datos soportados por CSS, como por ejemplo los caracteres Unicode o la palabra reservada !important. No obstante, Sass no trata estos valores de manera especial y se limita a considerarlos como si fuera una cadena de texto normal y corriente.

## Cadenas de Texto

```
CSS define dos tipos de cadenas de texto: las que tienen comillas (dobles o simples) como por ejemplo "Lucida Grande" o 'http://sass-lang.com'; y las que no tienen comillas, como por ejemplo sans-serif o bold.

SassScript soporta y reconoce estos dos tipos de cadenas. En general, el archivo CSS compilado mantendrá el mismo tipo de cadena que el que se utilizó en el archivo Sass original.

La única excepción es cuando se utiliza la interpolación #{} que se explica en los próximos capítulos. En este caso, las cadenas siempre se generan sin comillas. Ejemplo:
```

```scss
@mixin firefox-message($selector) {
  body.firefox #{$selector}:before {
    content: "Hi, Firefox users!";
  }
}

@include firefox-message(".header");
//El código Sass anterior se compila de la siguiente manera:

body.firefox .header:before {
  content: "Hi, Firefox users!";
}
```

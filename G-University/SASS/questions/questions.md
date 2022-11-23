#### 1. ¿Cuál es el código correcto para compilar Sass con Ruby?

- [ ] sass archivo.css archivo.scss.
- [ ] sass –watch archive.scss.
- [x] sass archivo.scss archivo.css.
- [ ] sass archivo.scss.

#### 2. Transformar este código Sass en Sassy(En la versión 3, Scss se presentó como la nueva forma de escribir de Sass. Esta se basa en la sintaxis de CSS existente, utilizando {} y ;. No se preocupa por niveles de identación o un espacio en blanco)

```scss
.wrapper {
  h1 {
    color: red;
  }
}
```

#### 3. ¿Cuál es el código correcto para averiguar el tipo de variable?

- [ ] No se puede saber el tipo.
- [ ] Type($var).
- [x] type-of($var).
- [ ] Kind($var)

### 4. Sumar las dos variables e imprimirlas en el ancho del elemento, que el resultado sean `px`(Dentro de las {} de una propiedad podemos sumar las $listas.)

```scss
$ancho1: 45;
$ancho2: 23;
.el {
  width: $ancho1 + $ancho2 + px;
}
```

### 5. Generar un lista llamada `$colores` con: red, green, blue, violet e imprimir el tercero en el elemento `h2` como color de fondo(nth($colores, 3) devuelve el tercer valor en $colores. Al mismo tiempo, va a generar un error si la posición es mayor a el largo de $colores)

```scss
$colores: red, green, blue, violet;
h2 {
  background-color: nth($colores, 3);
}
```

#### 6. Cómo saber la cantidad de ítems en una lista?

- [x] length($lista).
- [ ] q($lista).
- [ ] nth-length($lista).
- [ ] nth($lista)

### 7. Utilizar un condicional para preguntar si el número es menor o igual a `45`. Si es así, aplicar color de fondo `green`, sino `violet`.(El condicional @if toma los estilos de las listas($numero), los procesa($numero <= 45) y devuelve un estilo(green), siempre y cuando cumplan la condición establecida(TRUE). El @else es opciónal)

```scss
$numero: 83px;
.el {
  @if ($numero <= 45) {
    background-color: green;
  } @else {
    background-color: violet;
  }
}
```

#### 8. Seleccionar la definición de lista correcta

- [ ] $lista: list(red green blue);.
- [ ] $lista: (red); (green); (blue);.
- [ ] $lista: {red, yellow, green, blue};.
- [x] $lista: 'red','green','blue';

#### 9. Seleccionar la forma correcta de imprimir una variable como selector de clase

- [ ] .#[$variable].
- [ ] .#($variable).
- [x] .#{$variable}.
- [ ] .$variable

#### 10. Recorrer la lista `$numeros` utilizando el bucle `@each`, sumarlos todos e imprimirlos como ancho del elemento, con la unidad de `px`(El bucle @each va a recorrer la lista. Luego dentro del condicional debemos realizar la operación. Por último, imprimirlo en selector que deseamos)

```scss
$numeros: 34, 23, 54, 122;
$total: 0;
@each $valor in $numeros {
  $total: $total + $valor;
}
.elemento {
  width: $total + px;
}
```

#### 11. Cuál es la estructura correcta?

- [ ] .el:nth-child( $i ) { }.
- [x] .el:nth-child( #{ $i } ) { }.
- [ ] .el:nth-child( #( $i ) ) { }.
- [ ] .el:nth-child( \$i ) { }

#### 12. Completar el código para que el `sprite.png` reproduzca una imagen cada `50px` en `X`, mostrando las `7`imágenes del sprite, comenzando con `0px`(Una de la opciones para escribir un bucle @for es @for $var from through Empieza en e iteración hasta que llega al )

```scss
.el {
  background-image: url("sprite.png");
}
$distancia: 0px;
@for $i from 1 through 7 {
  .el:nth-child(#{ $i }) {
    background-position: $distancia 0;
  }
  $distancia: $distancia + 50 px;
}
```

#### 13. Crear un extend con placeholder, llamado `mensaje` que pase un color de fondo `#900` y un color de texto `#FFF`. Aplicarlo al elemento `.error`(Los placeholders son muy similares a los selectores, pero en lugar de utilizar un punto (.) en el comienzo, se utiliza el porcentaje (%). Los placeholders tienen las propiedad adicionales de que no se mostrarán en el CSS generado. Sólo los selectores que los extienden serán incluidos en el CSS)

```scss
%mensaje {
  color: #fff;
  background-color: #900;
}
.error {
  @extend %mensaje;
}
```

#### 14. Crear un mixin llamado `mensaje` que aplique un color de texto enviado como parámetro `($color)` y con ese mismo color, que aplique un borde dashed de `5px`. Aplicar este mixin a `.error` (enviar `red`) y a `.exito` (`green`)(@extend e @include desde una perspectiva de mantenimento son similares, pero no así en el resultado de CSS que devuelven. Con @extend las propiedades son duplicadas. Con @include están compartidas en el mismo selector)

```scss
@mixin mensaje($color) {
  color: $color;
  border: 5px dashed $color;
}
.error {
  @include mensaje(red);
}
.exito {
  @include mensaje(green);
}
```

#### 15. Seleccionar la opción correcta para oscurecer un `20%` el color `#900`.

- [x] darken(#900, 20%).
- [ ] darken(20%, #900).
- [ ] darken(#900 20%).
- [ ] darken(20% #900)

#### 16. Completar el código para encontrar el color complementario(complement) de naranja(complement() devuelve siempre el color complementario. Hay que tener cuidado porque esta función no es tan exacta y nos puede entregar un color no tan preciso)

```scss
$naranja: orange;
.mostrar {
  color: complement($naranja);
}
```

#### 17. Generar un degradado radial que comience con `#900` y luego termine un `50%` más claro(Para lograr que el radial-gradient comience con un color y luego termine un 50% más claro debemos utilizar dentro de radial-gradient() la función lighten())

```scss
.mostrar {
  background-image: radial-gradient (900, lighten (#900, 50%));
}
```

#### 18. ¿Cuáles de estas opciones generan una mezcla de verde y amarillo, con un `80%` de amarillo?

- [ ] mix(Green-yellow 80%).
- [ ] mix(Yellow, Green, 20%).
- [x] mix(Green, yellow, 20%).
- [ ] mix(Green, yellow, 80%).

#### 19. ¿Cuál es el código correcto para generar un mapa?

- [ ]

```scss
$mapa: "color: #CCC", "line-height: 1.2" );.
```

- [ ]

```scss
$mapa: { color: #CCC, line-height: 1.2 );}.
```

- [ ]

```scss
$mapa: color: #CCC, line-height: 1.2.
```

- [x]

```scss
$mapa: (
  color: #ccc,
  line-height: 1.2,
);
```

#### 20. ¿Cuál es la función indicada para mostrar el color de texto que contiene un mapa?

- [ ] nth($mapa, color).
- [x] map-get($mapa, color).
- [ ] get($mapa, color).
- [ ] map($mapa, color)

#### 21. ¿Cuál es la estructura de control ideal para recorrer e imprimir un mapa?

- [ ] @for.
- [x] @each.
- [ ] @if.
- [ ] @while

#### 22. Completar el código para recorrer e imprimir todas las propiedades dentro de $mapa en el selector 'elemento'.(La forma de recorrer e imprimir valores de un mapa es con el condicional @each)

```scss
$mapa: (
  text-shadow: 0 0 3px blue,
  line-height: 1.2,
  margin: 23px 5px,
);
.elemento {
  @each $valor, $key in $mapa {
    #{ $valor }: #{$key};
  }
}
```

#### 23. Recorrer el mapa `$oscuro`, imprimiendo los contenidos en el elemento de párrafo. Utilizar las variables `$key` y `$valor` para el bucle(La forma de recorrer e imprimir valores de un mapa es con el condicional @each.)

```scss
$oscuro: (
  color: #ccc,
  background-color: #333,
  text-shadow: 0 0 1px #99f,
);
p {
  @each $key, $valor in $oscuro {
    #{$key}: $valor;
  }
}
```

#### 24. ¿Cuál es la forma correcta de importar partials?

- [x] @import 'fuentes'.
- [ ] @import fuentes.scss.
- [ ] @import "\_fuentes.scss".
- [ ] @import "fuentes.scss"

#### 25. Importar los archivos partials `_fuentes.scss` y `_variables.scss`(Cuando importamos un archivo no hay necesidad de incluir las extensión .scss. Sass es inteligente y lo detecta automáticamente.)

```scss
@import "fuentes";
@import "variables";
```
#### 26. ¿Qué condicional recorre cada elemento de una lista?
- [ ] @if.
- [ ] @while.
- [ ] @for.
- [x] @each

#### 27. ¿Cómo creamos un mixin?
- [ ] $mixin.
- [ ] #mixin.
- [x] @mixin.
- [ ] %mixin

#### 28. ¿Qué debemos utilizar cuando trabajamos con `@extend` pero no queremos generar clases nuevas?
- [ ] listas.
- [x] placeholders.
- [ ] mixins.
- [ ] maps

#### 29. Cuál es el comando para realizar la compilación automática de `.scss` a `.css`?
- [ ] sass archivo.scss archivo.css.
- [ ] sass archivo.css archivo.scss.
- [x] sass --watch archivo.scss:archivo.css


#### 30. ¿Cuál es la gran diferencia entre Sass y Sassy?
- [x] Sass nos permite escribir sin {} ni ;.
- [ ] No hay diferencias entre ambos.
- [ ] Con Sass no hay que compilar el código a .css
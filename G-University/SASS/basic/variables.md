# Variables

La funcionalidad básica de SassScript es el uso de variables para almacenar valores que utilizas una y otra vez en tus hojas de estilos. Para ello, utiliza cualquier palabra como nombre de la variable, añádele el símbolo $ por delante y establece su valor como si fuera una propiedad CSS normal. Si por ejemplo defines una variable de la siguiente manera:

```scss
$width: 5em;
```

Ahora ya puedes utilizar la variable llamada $width como valor de cualquier propiedad CSS:

```scss
#main {
  width: $width;
}
```

Una limitación importante de las variables es que sólo están disponibles dentro del contexto donde se han definido. Esto significa que si defines la variable dentro de una regla anidada, sólo estará disponible para esas reglas anidadas. Si quieres poder utilizar una variable como valor de cualquier propiedad de la hoja de estilos, defínela fuera de cualquier selector.

# Shell interactiva

Si quieres experimentar con SassScript antes de empezar a utilizarlo en tus hojas de estilos, puedes hacer uso de "la shell interactiva". Para ello, ejecuta el comando sass añadiendo la opción -i y escribe cualquier expresión válida de SassScript. La shell te mostrará el resultado de evaluar esa expresión o un mensaje de error si no es correcta:

```sh
$ sass -i
>> "¡Hola Mundo!"
"¡Hola Mundo!"

>> 1px + 1px + 1px
3px

>> #777 + #777
#eeeeee

>> #777 + #888
white
```

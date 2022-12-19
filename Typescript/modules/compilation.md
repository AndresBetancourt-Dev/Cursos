### Ejercicio: Compilación de módulos

Los módulos se importan entre sí mediante un cargador de módulos. En tiempo de ejecución, el cargador de módulos busca y ejecuta todas las dependencias de un módulo antes de ejecutarlo. En función del destino del módulo que se especifique durante la compilación, el compilador generará el código adecuado para los sistemas de carga de módulos de Node.js (CommonJS), require.js (AMD), UMD, SystemJS o módulos nativos de ECMAScript 2015 (ES6). 

Para compilar módulos, especifique un destino --module en la línea de comandos o en el archivo tsconfig.json del proyecto.

Continúe con el proyecto desde el ejercicio anterior.

Abra el terminal y compile el módulo main.ts para Node.js escribiendo el comando siguiente:

```
tsc --module commonjs main.ts
```

El compilador sigue las instrucciones import para compilar todos los archivos dependientes. Tenga en cuenta que, cuando se compila main.ts, cada módulo se convierte en un archivo .js independiente.

Escriba node main para probar el archivo.

## Ejecución de módulos desde una página web
Si quiere compilar el archivo TypeScript para ES6 con el fin de usarlo en un explorador web, escriba el comando siguiente:

```sh
tsc --module es6 main.ts
```

Para ejecutar un módulo desde una página web, recuerde establecer la opción type en "module":

```html
<script type="module" src=".\main.js"></script>
```

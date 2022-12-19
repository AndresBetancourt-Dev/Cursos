# Ejercicio: Acceso a bibliotecas de tipos externas

Casi todos los proyectos aprovechan las bibliotecas de terceros. TypeScript permite importar bibliotecas de la misma manera que se importan los módulos que se han creado. Sin embargo, a diferencia de los módulos, es posible que la biblioteca de JavaScript no tenga definiciones de tipo.

## Importación de bibliotecas

En JavaScript, se usan bibliotecas externas en el código mediante la instrucción requires. En TypeScript, se obtiene acceso a ellas mediante la instrucción import. Después de importar una biblioteca y su definición de tipo, puede usarla en el código y obtener las ventajas de IntelliSense y de la comprobación de tipos.

## Bibliotecas de tipos

La escritura estática es un motivo principal para usar TypeScript. Las bibliotecas de tipos externas están disponibles para casi todas las bibliotecas comunes y proporcionan esta información para las bibliotecas que no la contienen (como, por ejemplo, las escritas en JavaScript). El compilador de TypeScript puede generar un mensaje de error si intenta usar una biblioteca que no tiene definiciones de tipo. También observará que IntelliSense no está disponible cuando no tiene estas definiciones.

Aunque algunas bibliotecas de JavaScript tendrán definiciones de tipo, descubrirá que muchas de ellas no disponen de esto. El proyecto de código abierto DefinitelyTyped es un repositorio de definiciones de tipo TypeScript para muchas de las bibliotecas de JavaScript populares. Las definiciones de tipo se instalan mediante el prefijo @types.

Dado que TypeScript solo usa las definiciones de tipo durante el tiempo de diseño, no es necesario que formen parte del proyecto publicado. Como resultado, se pueden instalar como devDependencies.

```zsh
npm install --save-dev @types/<library-name>
```

## Ejercicio

En este ejercicio, se instalará e implementará una biblioteca de tipos denominada dotenv. Esta biblioteca de uso frecuente carga las variables de entorno de un archivo .env en process.env, lo que permite almacenar los detalles de configuración separados del código y acceder a ellos. Puede usar dotenv para administrar elementos, como cadenas de conexión y otros valores, que pueden necesitar cambiar en función de dónde se ejecute el código.

Abra una nueva área de trabajo en Visual Studio Code.

Agregue un archivo nuevo denominado main.ts.

Desde el terminal, genere un archivo tsconfig.json nuevo con las opciones de configuración predeterminadas.

```
tsc --init
```

Vaya a DefinitelyTyped y busque la biblioteca de tipos dotenv. DefinitelyTyped proporcionará el nombre de la biblioteca que se va a instalar y otros detalles de implementación.

En el terminal, use npm para instalar la biblioteca de tipos dotenv en la carpeta del proyecto.

```
npm install dotenv
```

La definición de tipo dotenv también requiere la instalación de la definición de tipo node. node proporciona acceso a process.env para que pueda acceder a él desde el código.

```
npm install --save-dev @types/node @types/dotenv
```

Cree un archivo denominado .env en la carpeta raíz del proyecto. Este archivo contendrá variables específicas del entorno para el proyecto.

En .env, agregue las variables en líneas nuevas con el formato NAME=VALUE. En este ejemplo, defina tres variables:

```
DB_HOST=localhost
WEB_HOST=staging.adventure-works.com
```

En main.ts, importe la biblioteca de tipos dotenv.

```ts
import dotenv from 'dotenv';
```
Asigne dotenv.config() a una variable. config lee el archivo .env, analiza el contenido, lo asigna a process.env y devuelve un objeto con una clave parsed, que incluye el contenido cargado o una clave error si se ha producido un error.

```ts
const result = dotenv.config();
```

TypeScript ahora puede proporcionar IntelliSense y la comprobación de tipos para el objeto config. Si escribe result., verá que result tiene dos propiedades: error y parsed. Agregue una instrucción de comprobación de errores para verificar que la operación config ha funcionado según lo esperado.

```ts
if (result.error) {
    throw result.error;
}
```

Devuelva el contenido de la propiedad parsed a la consola.

```ts
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
```
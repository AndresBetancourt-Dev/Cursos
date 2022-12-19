# Ejercicio: Exportación e importación de componentes de módulo

Veamos cómo organizar las declaraciones de función, variables, clases e interfaces en varios módulos y, después, usar estos componentes en el código.

## Exportación de un componente de módulo
Para exportar un componente de módulo, use la palabra clave export.

En esta parte del ejercicio, organizará las funciones relacionadas en módulos independientes y luego exportará las declaraciones de función.

Abra una nueva área de trabajo de Visual Studio Code.

Cree un archivo llamado greetings_module.ts y, después, agregue la función siguiente denominada returnGreeting. Agregue la palabra clave export antes del nombre de la función para que esté disponible en otros módulos.

```ts
export function returnGreeting (greeting: string) {
    console.log(`The message from Greetings_module is ${greeting}.`);
}
```

Cree un segundo archivo llamado greetings-utilities_module.ts y, después, agregue las dos funciones siguientes, returnGreeting y getLength, al archivo nuevo. Agregue export antes de la función returnGreeting para que esté disponible en otros módulos. No es necesario exportar la función getLength porque solo se utiliza en el ámbito del módulo.

```ts
export function returnGreeting (greeting: string) {
    let greetingLength = getLength(greeting);
    console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}
function getLength(message: string): number {
    return message.length
}
```

## Importación de un componente de módulo
Para usar los componentes exportados de un módulo, utilice la instrucción import. La instrucción import puede adoptar varias formas en función de sus objetivos.

Para importar una exportación única desde un módulo, haga lo siguiente:

```ts
import { <component name> } from '<module name>'
```

Para cambiar el nombre de una importación, use la palabra clave "as":

```ts
import { <component name> as <new name> } from '<module name>'
```

Para importar el módulo completo en una sola variable y usarlo para acceder a las exportaciones de módulos, haga lo siguiente:

```ts
import * as <variable name> from '<module name>'
```

En la siguiente parte del ejercicio, importará los componentes de cada uno de los dos módulos en un nuevo módulo.

Cree un archivo denominado main.ts. Este archivo contendrá el código principal de la aplicación, incluidas las instrucciones import.

Importe la función returnGreeting desde greetings_module.ts mediante la palabra clave import.

```ts
import { returnGreeting } from './greetings_module.js';         // imports a single function in the module
```
Si greetings_module.ts hubiera contenido varios componentes, podría importar todo el módulo en una sola variable (por ejemplo, allGreetingFunctions), tal como se muestra en la instrucción siguiente. Después, puede usar la variable para acceder a todas las exportaciones de módulos.

```ts
import * as allGreetingFunctions from './greetings_module.js';  // imports all exported components in the module
```

Intente importar la función returnGreeting desde greetings-utilities_module.ts mediante la instrucción import { returnGreeting } from './greetings-utilities_module.js'. Observará un error porque ambos archivos contienen una función returnGreeting y ahora tiene un conflicto de nomenclatura en el ámbito global de main.ts.

Corrija el conflicto de nomenclatura; para ello, asigne un nombre nuevo a la segunda instancia de returnGreeting. Reemplace { returnGreeting } por { returnGreeting as returnGreetingLength }. Ahora puede usar returnGreetingLength en lugar del nombre de función en el código.

```ts
import { returnGreeting as returnGreetingLength } from './greetings-utilities_module.js';
```

Ahora, puede usar las funciones returnGreetings del código.

```ts
returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
```
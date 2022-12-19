# Introducción a los espacios de nombres de TypeScript

Los espacios de nombres (denominados "módulos internos" en versiones anteriores de TypeScript) son una forma específica de TypeScript de organizar y categorizar el código, lo que le permite agrupar el código relacionado. Los espacios de nombres permiten agrupar variables, funciones, interfaces o clases relacionadas con las reglas de negocio en un espacio de nombres y la seguridad en otro.

El código dentro de un espacio de nombres se extrae del ámbito global y entra en el ámbito del espacio de nombres. Esta colocación puede ayudarle a evitar conflictos de nomenclatura entre los componentes del espacio de nombres global y puede ser beneficioso al trabajar con equipos de desarrollo distribuidos que pueden utilizar nombres de componentes similares.

Por ejemplo, namespace A y namespace B comparten una función denominada functionName. Cualquier intento de acceder a la función sin hacer referencia al espacio de nombres que la contiene produce un error porque las declaraciones de variable están en el espacio de nombres global, mientras que las dos funciones se encuentran dentro del ámbito de sus espacios de nombres respectivos.

<img src="https://learn.microsoft.com/es-mx/training/modules/typescript-namespaces-organize-code/media/namespaces.png">

Los espacios de nombres se pueden usar para:

Reducir la cantidad de código en el ámbito global, limitando la "contaminación del ámbito global".
Proporcionar un contexto para los nombres, lo que ayuda a reducir los conflictos de nomenclatura.
Mejorar la reutilización.

## Ejercicio: Organizar el código mediante espacios de nombres de un solo archivo

Puede implementar espacios de nombres en un solo archivo TypeScript o en varios archivos TypeScript.

Complete los pasos para definir un espacio de nombres de un solo archivo:

Abra una nueva área de trabajo de Visual Studio Code.

Cree un nuevo archivo llamado module08_exercise.ts.

Defina un nuevo espacio de nombres con la palabra clave namespace seguida del nombre del espacio de nombres. Puede definir tantos espacios de nombres como sea necesario en un solo archivo TypeScript. En la parte superior del archivo, defina dos espacios de nombres denominados Greetings y GreetingsWithLength.

```ts
namespace Greetings {
}
namespace GreetingsWithLength {
}
```

Ahora puede definir funciones y clases dentro de la definición del espacio de nombres. Todos los componentes definidos en el espacio de nombres se limitan al espacio de nombres y se quitan del ámbito global. Agregue una nueva función llamada returnGreeting al espacio de nombres Greetings. Esta función devuelve el valor de un parámetro a la consola.


```ts
namespace Greetings {
    function returnGreeting (greeting: string) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
    }
}
```

Agregue dos nuevas funciones, returnGreeting y getLength, al espacio de nombres GreetingsWithLength. La función returnGreeting utiliza la función auxiliar getLength para determinar la longitud del saludo antes de devolver el mensaje a la consola.

```ts
namespace GreetingsWithLength {
    function returnGreeting (greeting: string) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
        return message.length
    }
}
```

Si desea que una función o una clase estén disponibles para el código fuera del espacio de nombres, agregue la palabra clave export antes de su nombre. Si se omite la palabra clave export, el componente solo está disponible dentro del espacio de nombres. Puede hacerlo si define componentes a los que solo deben poder acceder directamente otros componentes del espacio de nombres. Agregue la palabra clave export a la función returnGreeting en ambos espacios de nombres. La función getLength no debe ser accesible fuera del espacio de nombres GreetingsWithLength, de modo que omita la palabra clave export.


```ts
namespace Greetings {
    export function returnGreeting (greeting: string) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
    }
}
namespace GreetingsWithLength {
    export function returnGreeting (greeting: string) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
        return message.length
    }
}
```

Para usar una clase o función dentro de un espacio de nombres, utilice el nombre del espacio de nombres como prefijo para del componente. Intente llamar a la función returnGreeting sin especificar el espacio de nombres. Esto devuelve un error porque ambas funciones returnGreeting están fuera del ámbito en el espacio de nombres global. Ahora, pruebe a utilizar Greetings o GreetingsWithLength como prefijo para la función returnGreeting. Esto proporciona acceso a la función dentro de cada espacio de nombres respectivo.

```ts
returnGreeting('Hello');                     // Returns error
Greetings.returnGreeting('Bonjour');         // OK
GreetingsWithLength.returnGreeting('Hola');  // OK
```

# Organización del código mediante espacios de nombres anidados
También puede anidar espacios de nombres dentro de espacios de nombres, proporcionando incluso más opciones para organizar el código.

Siga trabajando en el editor de código.

Cree un nuevo espacio de nombres denominado AllGreetings y luego mueva los espacios de nombres Greetings y GreetingsWithLength que creó anteriormente dentro de él. Agregue la palabra clave export antes de ambos nombres de espacio de nombres. Esto permite que el espacio de nombres sea accesible fuera del espacio de nombres AllGreetings.

```ts
namespace AllGreetings {
    export namespace Greetings {
        export function returnGreeting (greeting: string) {
            console.log(`The message from namespace Greetings is ${greeting}.`);
        }
    }
    export namespace GreetingsWithLength {
        export function returnGreeting (greeting: string) {
            let greetingLength = getLength(greeting);
            console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
        }
        function getLength(message: string): number {
            return message.length
        }
    }
}
```

Para llamar a las funciones, empiece por escribir el nombre del espacio de nombres más externo, AllGreetings, un punto y, después, el nivel siguiente en la jerarquía del espacio de nombres, Greetings o GreetingsWithLength. Continúe por la jerarquía hasta alcanzar el nombre de la función.

```ts
AllGreetings.Greetings.returnGreeting('Bonjour');        // OK
AllGreetings.GreetingsWithLength.returnGreeting('Hola');  // OK
```

## Definición de un alias de espacio de nombres
TypeScript crea una jerarquía de espacios de nombres anidados que es fácil de recorrer. Sin embargo, a medida que los espacios de nombres anidados se vuelven más complejos, puede que desee crear un alias para acortar y simplificar el código. Para ello, use la palabra clave import.

Siga trabajando en el editor de código.

Escriba import greet = AllGreetings.Greetings. Esto define un nuevo alias denominado greet que representa AllGreetings.Greetings. Ahora puede usar greet en lugar de AllGreetings.Greetings en el código.

```ts
import greet = AllGreetings.Greetings;
greet.returnGreeting('Bonjour');
```

## Compilación de espacios de nombres de un solo archivo
Los espacios de nombres de un solo archivo se compilan de la misma manera que cualquier otro archivo TypeScript. Dado que los espacios de nombres son una construcción solo de TypeScript, se quitan del código de JavaScript resultante y se convierten en variables que se anidan según sea necesario para formar objetos similares a los espacios de nombres.
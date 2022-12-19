# Información general sobre las interfaces en TypeScript

Uno de los principios básicos de TypeScript es que la comprobación de tipos se centra en la forma que tienen los valores. Esto se denomina a veces "duck typing" o "subtipo estructural". En TypeScript, las interfaces cumplen la función de nombrar estos tipos y constituyen una manera eficaz de definir un "contrato de código" dentro del código, así como contratos con el código fuera del proyecto.

Comencemos con una introducción a las interfaces, lo que incluye qué son y cómo se pueden usar en el código TypeScript.

## ¿Qué es una interfaz?
Puede usar interfaces para describir un objeto, asignar nombres a los tipos del objeto y parametrizarlos, y componer tipos de objetos con nombre existentes en otros nuevos.

Esta simple interfaz define las dos propiedades y un método de un objeto Employee.
```ts
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}
```

Observe que la interfaz no inicializa ni implementa las propiedades que se declaran dentro de ella. Esto se debe a que el único trabajo de una interfaz consiste en describir un tipo. Define lo que requiere el contrato de código, mientras que es una variable, función o clase que implementa la interfaz la que se encarga de cumplir el contrato, al proporcionar los detalles de implementación necesarios.

Después de definir una interfaz, puede usarla como un tipo y disfrutar de todas las ventajas de la comprobación de tipos y de IntelliSense.

En este ejemplo se implementa la interfaz mediante la declaración de una variable del tipo Employee. Cumple el contrato al pasar los valores de las propiedades `firstName` y `lastName`, y al especificar que el método fullName debe combinar las propiedades `firstName` y `lastName`, y devolver el resultado.

```ts
let employee: Employee = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
```

La comprobación de tipos garantiza que el número 10 no sea asignable a employee.firstName porque está esperando un objeto string.

Dado que TypeScript tiene un sistema de tipos estructural, un tipo de interfaz con un conjunto determinado de miembros se considera idéntico a otro literal de tipo de interfaz o tipo de objeto con un conjunto de miembros idéntico (y se puede sustituir por este). Si una interfaz y una clase implementan la misma estructura, se pueden usar indistintamente. Consulte Tipos estructurales en el sitio de prueba para obtener un ejemplo.

Las interfaces no tienen ninguna representación en tiempo de ejecución; son únicamente una construcción en tiempo de compilación. Las interfaces son especialmente útiles para documentar y validar la forma necesaria de las propiedades, los objetos que se pasan como parámetros y los objetos que se devuelven desde las funciones. Esto le permite detectar errores y asegurarse de que está pasando los parámetros correctos en tiempo de compilación, en lugar de descubrirlo en tiempo de ejecución.

## Razones para usar una interfaz en TypeScript
A menudo, las interfaces son el principal punto de contacto entre dos fragmentos de código TypeScript, sobre todo cuando se trabaja con código JavaScript existente o con objetos de JavaScript integrados.

Puede usar una interfaz para:

- Crear nombres abreviados para tipos de uso frecuente. Incluso con una interfaz simple como la que se declaró en el ejemplo anterior, disfrutará de las ventajas de IntelliSense y la comprobación de tipos.

- Controlar la coherencia en un conjunto de objetos porque cada objeto que implementa la interfaz funciona bajo las mismas definiciones de tipo. Esto puede resultar útil si trabaja con un equipo de desarrolladores y quiere asegurarse de que se pasan valores correctos a las propiedades, los constructores o las funciones. Por ejemplo, los objetos que implementan una interfaz deben implementar todos los miembros necesarios de esta. Por lo tanto, si no pasa todos los parámetros necesarios del tipo correcto, el compilador de TypeScript generará un error.

- Describir las API de JavaScript existentes, y aclarar los parámetros de función y los tipos de valor devueltos. Esto es especialmente útil cuando se trabaja con bibliotecas de JavaScript como jQuery. Una interfaz puede proporcionarle una idea clara de lo que espera una función y lo que devolverá, sin necesidad de consultar repetidamente la documentación.

## ¿En qué se diferencia una interfaz de un alias de tipo?
La interfaz Employee anterior también se puede expresar como un alias de tipo mediante la palabra clave type:
```ts
type Employee = {
    firstName: string;
    lastName: string;
    fullName(): string;
}
```

Un alias de tipo es una definición de un tipo de datos, por ejemplo, unión, primitivo, intersección, tupla o cualquier otro tipo. Por otro lado, las interfaces son una manera de describir formas de datos, por ejemplo, un objeto. Los alias de tipos pueden actuar como interfaces, pero hay algunas diferencias sutiles. La principal diferencia es que un alias de tipos no se puede volver a abrir para agregar nuevas propiedades, mientras que una interfaz siempre es extensible. Además, solo se puede describir una unión o tupla mediante un alias de tipos.


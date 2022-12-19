# Ejercicio: Creación de una clase

Para crear una clase, defina sus miembros: propiedades, un elemento constructor, descriptores de acceso y métodos.

Vamos a crear una clase denominada Car. Puede utilizar la clase Car por sí sola para crear objetos básicos Car, o puede ampliar la clase Car para crear nuevas clases para tipos específicos de vehículos, como una clase GasCar o una clase ElectricCar. Estas clases heredarán las propiedades y métodos de la clase Car, pero también tendrán sus propias propiedades y métodos.

Abra el área de juegos y quite cualquier código existente.

Cree una nueva class mediante la palabra clave class y el nombre de clase, Car. Por convención, los nombres de clase están en PascalCase. Vamos a agregar también algunos comentarios para que sea más fácil agregar los miembros de la clase en los lugares correctos.

```ts
class Car {
  // Properties
  // Constructor
  // Accessors
  // Methods
}
```

## Declaración de las propiedades de clase

Puede pensar en las propiedades de una clase como los datos sin procesar que se pasan al objeto cuando se inicializa.

Las propiedades de la clase Car son las que se aplican a cualquier automóvil, independientemente de la marca o el modelo. Por ejemplo, estas propiedades pueden incluir la marca del coche, el color y el número de puertas. Dado que está trabajando en TypeScript, también puede aplicar atributos de tipo a las propiedades.

Declare las tres propiedades de la clase Car: \_make: string, \_color: string y \_doors: number.

```ts
// Properties
_make: string;
_color: string;
_doors: number;
```

## Definición del constructor de la clase
Las clases de TypeScript crean dos tipos independientes: el tipo de instancia, que define qué miembros tiene una instancia de una clase, y el tipo de función constructor, que define qué miembros tiene la función de clase constructor. El tipo de función constructor también se conoce como el tipo "lado estático" porque incluye miembros estáticos de la clase.

El uso de constructor puede simplificar las clases y facilitar su administración cuando se trabaja con muchas clases.

Una función constructor inicializa las propiedades de la clase y tiene tres partes:

La palabra clave constructor.
Una lista de parámetros, que define los parámetros que se pasarán al nuevo objeto cuando se crea una nueva instancia. Al definir la lista de parámetros, recuerde que:
No es necesario definir un parámetro para cada propiedad de la clase.
Como con todas las funciones de TypeScript, los parámetros pueden ser obligatorios u opcionales, tener valores predeterminados o ser parámetros de REST. (Esta es una diferencia clave de JavaScript).

Los nombres de los parámetros pueden ser diferentes de los nombres de propiedad. Tenga en cuenta que estos nombres aparecerán en IntelliSense al trabajar con objetos de este tipo, por lo que debe usar nombres suficientemente descriptivos.
Las asignaciones de propiedades. Cada instrucción asigna el valor de un parámetro al valor de una propiedad. Para indicar que va a acceder a un miembro de la clase (en este caso, la propiedad), aplique la palabra clave this..

Una clase puede contener como máximo una declaración constructor. Si una clase no contiene ninguna declaración constructor, se proporciona un constructor automático.

Siga definiendo la clase Car en el área de juegos.

Cree el elemento constructor para la clase Car. Comience con la palabra clave constructor y, a continuación, defina los parámetros y tipos que se pasarán al nuevo objeto Car cuando se cree una nueva instancia. Para la clase Car, defina un parámetro para cada una de las tres propiedades y anótelo con el tipo. Haga que el parámetro doors sea opcional con un valor predeterminado de 4.

Dentro del bloque de código para constructor, asigne un valor de parámetro a cada propiedad (por ejemplo, this._make = make). En este caso, establézcalo en el valor del parámetro asociado, pero tenga en cuenta que puede asignar cualquier expresión que devuelva el tipo necesario.

```ts
// Constructor
constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
}
```

## Definición de los descriptores de acceso
Aunque puede acceder directamente a las propiedades de la clase (public de forma predeterminada), TypeScript admite captadores y establecedores como una forma de interceptar el acceso a una propiedad. Esto le proporciona un control más preciso sobre cómo se tiene acceso a un miembro en cada objeto.

Para aplicar set o devolver el valor de los miembros del objeto desde el código, debe definir los descriptores de acceso get y set en la clase.

Siga definiendo la clase Car en el área de juegos.

Defina un bloque get para el parámetro make que devuelve el valor de la propiedad _make.

```ts
// Accessors
get make() {
    return this._make;
}
```

Define un bloque set para el parámetro make que establece el valor de la propiedad _make en el valor del parámetro make.

```ts
set make(make) {
    this._make = make;
}
```

También puede utilizar los bloques get y set para validar los datos, imponer restricciones o realizar otras manipulaciones de los datos antes de devolverlos al programa. Defina los bloques get y set para el parámetro color pero, esta vez, devuelva una cadena concatenada al valor de la propiedad _color.

```ts
get color() {
    return 'The color of the car is ' + this._color;
}
set color(color) {
    this._color = color;
}
```

Defina los bloques get y set para el parámetro doors. Antes de devolver el valor de la propiedad _doors, verifique que el valor del parámetro doors es un número par. Si no es así, se produce un error.

```ts
get doors() {
    return this._doors;
}
set doors(doors) {
    if ((doors % 2) === 0) {
        this._doors = doors;
    } else {
        throw new Error('Doors must be an even number');
    }
}
```

## Definición de los métodos de clase
Puede definir cualquier función de TypeScript dentro de una clase y llamarla como un método en el objeto o desde otras funciones dentro de la clase. Estos miembros de la clase describen los comportamientos que su clase puede realizar y pueden realizar cualquier otra tarea requerida por la clase.

Siga definiendo la clase Car en el área de juegos.

Defina estos cuatro métodos para la clase Car: accelerate, brake, turn y worker. Observará que no hay ninguna palabra clave function. Esto no es necesario ni se permite al definir funciones en una clase, por lo que ayuda a mantener la sintaxis concisa.

```ts

// Methods
accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
}
brake(): string {
    return `${this.worker()} is braking with the standard braking system.`
}
turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
}
// This function performs work for the other method functions
worker(): string {
    return this._make;
}
```
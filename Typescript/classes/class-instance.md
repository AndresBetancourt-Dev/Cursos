# Ejercicio: Creación de instancias de una clase

En este punto, tiene una clase denominada Car que tiene tres propiedades, y puede obtener y establecer el valor de esas propiedades. También tiene cuatro métodos. Ahora, puede crear una instancia de la clase Car con la palabra clave new y pasarle parámetros, creando un nuevo objeto Car.

Continúe trabajando en el área de juegos.

Debajo de la declaración de clase, declare una variable denominada myCar1 y asígnele un nuevo objeto Car, pasando valores para los parámetros make, color y doors (asegúrese de que el parámetro doors tiene asignado un número par).

```ts
let myCar1 = new Car('Cool Car Company', 'blue', 2);  // Instantiates the Car object with all parameters
```

Puede tener acceso a las propiedades del nuevo objeto myCar1. Escriba myCar1. y debería ver una lista de los miembros definidos en la clase, incluidos color y _color. Seleccione Ejecutar para devolver el valor de ambas propiedades a la consola. ¿Qué sucede? ¿Por qué?

```ts
console.log(myCar1.color);
console.log(myCar1._color);
```

El miembro _color representa la propiedad definida en la clase, mientras que color es el parámetro que se pasa al constructor. Cuando se hace referencia a _color, se obtiene acceso a los datos sin procesar de la propiedad, que devuelve 'blue'. Cuando se hace referencia a color, se obtiene acceso a la propiedad a través del descriptor de acceso get o set, que devuelve 'The color of the car is blue'. Es importante comprender la diferencia entre los dos porque a menudo no se quiere permitir el acceso directo a la propiedad sin hacer alguna validación u otro trabajo en los datos antes de obtenerlos o establecerlos. Aprenderá a usar modificadores de acceso para controlar la visibilidad de los miembros de la clase más adelante en la unidad.

Recuerde que el bloque set del parámetro doors comprueba el valor para determinar si es par o impar. Para probarlo, declare una variable denominada myCar2 y asígnele un nuevo objeto Car, pasando valores para los parámetros make, color y doors. Esta vez, establezca el valor del parámetro doors en un número impar. Ahora, seleccione Ejecutar. ¿Qué sucede? ¿Por qué?

```ts
let myCar2 = new Car('Galaxy Motors', 'red', 3);
```

Aunque se pasó un número impar a doors, se compila y se ejecuta sin errores porque no se realiza ninguna validación de datos en constructor. Pruebe a establecer el valor de doors en otro número impar (por ejemplo, myCar2.doors = 5) y pruébelo. Así, se debería invocar al bloque set y producirse un error. Si desea realizar este paso de validación cuando se inicializa el objeto Car, debe agregar una comprobación de validación a constructor.

```ts
constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if ((doors % 2) === 0) {
        this._doors = doors;
    } else {
        throw new Error('Doors must be an even number');
    }
}
```
Pruebe el parámetro opcional doors omitiéndolo en la inicialización del objeto.

```ts
let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);  // returns 4, the default value
```

Pruebe los métodos enviando los valores devueltos a la consola.

```ts
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));
```
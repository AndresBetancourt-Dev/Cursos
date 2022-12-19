# Ejercicio: Ampliación de una clase

En este ejercicio, ampliará la clase Car para crear una nueva clase denominada ElectricCar e invalidar un método.

Continúe trabajando en el área de juegos.

Debajo de la clase Car, cree una nueva clase denominada ElectricCar que aplique extends Car.

```ts
class ElectricCar extends Car {
  // Properties unique to ElectricCar
  // Properties
  // Constructor
  // Accessors
  // Methods
}
```

Declare la propiedad que es única para la clase ElectricCar, \_range, como una propiedad private de tipo number.

```ts
// Properties
private _range: number;
```

El elemento constructor de la subclase es diferente del elemento constructor de la clase base de varias maneras.

La lista de parámetros puede incluir cualquiera de las propiedades de la clase base y la subclase. (Al igual que con todas las listas de parámetros en TypeScript, recuerde que los parámetros obligatorios deben aparecer antes de los opcionales).
En el cuerpo de constructor, debe agregar la palabra clave super() para incluir los parámetros de la clase base. La palabra clave super ejecuta el elemento constructor de la clase base cuando se ejecuta.
La palabra clave super debe aparecer antes de cualquier referencia a this. cuando se refiera a las propiedades de la subclase.
Defina la clase constructor para ElectricCar, incluidas las propiedades \_make, \_color y \_doors de la clase base y la propiedad \_range de la subclase. En este elemento constructor, establezca el valor predeterminado del parámetro doors a 2.

```ts
// Constructor
constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
}

```

Defina los descriptores de acceso get y set para el parámetro range.

```ts
// Accessors
get range() {
    return this._range;
}
set range(range) {
    this._range = range;
}
```

Escriba el siguiente método charge que devuelve un mensaje a la consola. Este método incluye una llamada a la función worker que definió en la clase Car. Pero genera el error La propiedad "worker" es privada y solo es accesible dentro de la clase "Car". ¿Sabe cómo solucionar este problema?

```ts
// Methods
charge() {
    console.log(this.worker() + " is charging.")
}
```

En la clase Car, cambie el modificador de acceso de la función worker de private a protected. Esto permite a las subclases de la clase Car utilizar la función, mientras que la mantienen oculta de los miembros disponibles para los objetos de los que se ha creado una instancia desde la clase. Ya debería estar resuelto el error del método charge.

Pruebe la nueva clase ElectricCar para comprobar que funciona según lo previsto.

```ts
let spark = new ElectricCar("Spark Motors", "silver", 124, 2);
let eCar = new ElectricCar("Electric Car Co.", "black", 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
```

Defina un nuevo método brake en la clase ElectricCar que tenga detalles de implementación diferentes. Tenga en cuenta que la firma del parámetro y el tipo de valor devuelto del método brake deben ser los mismos que los del método brake de la clase Car.

```ts
// Overrides the brake method of the Car class
brake(): string {
    return `${this.worker()}  is braking with the regenerative braking system.`
}
```

Pruebe el nuevo método y compruebe que funciona según lo previsto.

```ts
console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"
```

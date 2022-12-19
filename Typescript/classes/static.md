# Definición de propiedades estáticas

Las propiedades y métodos de las clases definidos hasta ahora son propiedades de instancia, lo que significa que se crea una instancia de ellos y se les llama en cada instancia del objeto de la clase. Hay otro tipo de propiedad denominada propiedad estática. Todas las instancias de una clase comparten las propiedades y los métodos estáticos.

Para convertir una propiedad en estática, use la palabra clave static antes de un nombre de método o propiedad.

Por ejemplo, puede agregar una nueva propiedad static a la clase Car llamada numberOfCars que almacene el número de veces que se crea una instancia de la clase Car y establecer su valor inicial en 0. A continuación, en el constructor, incremente el recuento en uno.

```ts
class Car {
  // Properties
  private static numberOfCars: number = 0; // New static property
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
    Car.numberOfCars++; // Increments the value of the static property
  }

  public static getNumberOfCars(): number {
    return Car.numberOfCars;
  }
  // ...
}
```

Tenga en cuenta que se usa la sintaxis className.propertyName en lugar de this. cuando se obtiene acceso a la propiedad estática.

También puede definir métodos estáticos. Puede llamar al método getNumberOfCars para devolver el valor de numberOfCars.

```ts
public static getNumberOfCars(): number {
    return Car.numberOfCars;
}
```

Cree una instancia de la clase Car como de costumbre y, a continuación, use la sintaxis Car.getNumberOfCars() para devolver el número de instancias.

```ts
// Instantiate the Car object with all parameters
let myCar1 = new Car("Cool Car Company", "blue", 2);
// Instantiates the Car object with all parameters
let myCar2 = new Car("Galaxy Motors", "blue", 2);
// Returns 2
console.log(Car.getNumberOfCars());
```

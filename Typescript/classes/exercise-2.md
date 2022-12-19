# Ejercicio: Aplicación de modificadores de acceso a una clase

En este ejercicio, aplicará modificadores de acceso a las propiedades y los métodos de la clase Car.

Siga definiendo la clase Car en el área de juegos.

Pruebe el acceso de los miembros de la clase escribiendo myCar1. y observe que todos los miembros aparecen en la lista, incluidas las propiedades, los parámetros constructor, los métodos y la función worker.

```ts
class Car {
  private _make: string;
  private _color: string;
  private _doors: number;
  // ...
  private worker(): string {
    return this._make;
  }
}
```

Establezca el modificador de acceso de las propiedades \_color, \_doors y \_make y la función worker en private.

Pruebe de nuevo el acceso a los miembros de la clase escribiendo myCar1. y observe que las propiedades y la función worker ahora no están disponibles. Cualquier intento de utilizar estos miembros de la clase generará un error en tiempo de compilación.


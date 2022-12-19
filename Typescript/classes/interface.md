# Declaración de una interfaz para asegurar la forma de la clase

Recuerde que, en Typescript, puede usar una interfaz para establecer un "contrato de código" que describa las propiedades requeridas de un objeto y sus tipos. Por lo tanto, se puede utilizar una interfaz para asegurar la forma de la instancia de la clase. Las declaraciones de clase pueden hacer referencia a una o varias interfaces en su cláusula implements para validar que proporcionan una implementación de las interfaces.

Continúe trabajando en el área de juegos.

Declare una interfaz Vehicle que describa las propiedades y los métodos de la clase Car.

```ts
interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}
```

Observe que la interfaz incluye los parámetros del constructor, no las propiedades. Pruebe a incluir una de las propiedades privadas (por ejemplo, _make: string). TypeScript producirá un error porque la interfaz solo puede describir el lado público de la clase y no puede incluir miembros privados. Esto evita su uso para comprobar que una clase también tiene los tipos correctos para el lado privado de la instancia de la clase.

Ahora puede implementar la interfaz Vehicle en la clase Car. A medida que se compilan los detalles de la clase, TypeScript se asegurará de que la clase se adhiera al contrato de código descrito en la interfaz.
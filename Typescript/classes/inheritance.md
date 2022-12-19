# Ampliación de una clase mediante herencia

La herencia le permite establecer relaciones y crear jerarquías de clases en la composición de objetos.

Por ejemplo, puede aplicar extend a la clase Car para crear una clase nueva denominada ElectricCar. La clase ElectricCarheredará las propiedades y los métodos de la clase Car, pero también puede tener sus propios atributos y comportamientos únicos, como range y charge. Así que, al ampliar la clase Car, puede crear nuevas clases que reutilicen el código de la clase Car y luego construir sobre ella.

<img src="https://learn.microsoft.com/es-mx/training/modules/typescript-declare-instantiate-classes/media/m05-car-class.png" alt="Herencia">

La clase Car incluye las propiedades make, color y doors y los métodos accelerate, brake y turn. Cuando la clase ElectricCar amplía a Car, incluye todas las propiedades y los métodos de Car, además de una nueva propiedad denominada range y un nuevo método denominado charge.

ElectricCar es una subclase que usa la palabra clave extends para derivarse de la clase base Car. (Las clases base también se denominan superclases o clases primarias). Dado que ElectricCar amplía la funcionalidad de Car, puede crear una instancia de ElectricCar que pueda aplicar accelerate, brake y turn. Si tuviera que hacer cambios en el código de la clase base, solo tendría que cambiarlo en la clase Car y, de ese modo, todas las subclases de Car heredarán esos cambios.

Entre los motivos que apoyan el uso de la herencia se encuentran los siguientes:

Reusabilidad del código. Puede diseñar un plan de desarrollo y reutilizarlo en muchos lugares. Esto también ayuda a evitar la redundancia en el código.
Se puede utilizar una base para derivar cualquier número de subclases en una jerarquía. Por ejemplo, las subclases de la jerarquía Car también podrían incluir una clase SUV o una clase Convertible.
En lugar de tener que hacer cambios de código en muchas clases diferentes que tienen una funcionalidad similar, solo hay que hacer los cambios una vez en la clase base.

## Invalidación de un método
Cuando una clase derivada tiene una definición diferente para una de las funciones miembro de la clase base, se dice que la función base está invalidada. La invalidación es lo que sucede cuando se crea una función en una subclase con el mismo nombre que la función de la clase base, pero con una funcionalidad diferente.

Por ejemplo, supongamos que los automóviles eléctricos usan un tipo diferente de sistema de frenado que los automóviles tradicionales, denominado frenos regenerativos. Por lo tanto, es posible que desee invalidar el método brake de la clase base Car con un método especializado para la subclase ElectricCar.

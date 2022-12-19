# Introducción a las clases de TypeScript

Las clases permiten expresar patrones comunes orientados a objetos de una manera estándar, haciendo que características como la herencia sean más legibles e interoperables. En TypeScript, las clases son otra forma de definir la forma de un objeto, además de describir los tipos de objetos con interfaces y funciones.

Si no ha trabajado con clases, puede que le resulte útil revisar algunos conceptos básicos.

Puede pensar en una clase como un plano técnico para crear objetos, como un automóvil. Una clase Car describe los atributos de un automóvil, por ejemplo, la marca, el color o el número de puertas. También describe los comportamientos que puede realizar el automóvil, como acelerar, frenar o girar.

Pero la clase Car es simplemente un plan para construir un automóvil. Debe crear una instancia de Car a partir de la clase Car antes de que se convierta en un objeto al que puede asignar valores de propiedad (como establecer el color en azul) o llamar a sus comportamientos (como la aplicación de los frenos).

La clase Car se puede volver a usar para crear cualquier número de objetos Car nuevos, cada uno con sus propias características. También puede ampliar la clase Car. Por ejemplo, una clase ElectricCar podría ampliar el valor de Car. Tendrá todos los mismos atributos y comportamientos de Car pero también puede tener sus propios atributos y comportamientos únicos, como su alcance y una operación de carga.

La clase Car incluye las propiedades make, color y doors y los métodos accelerate, brake y turn. Cuando la clase ElectricCar amplía a Car, incluye todas las propiedades y los métodos de Car, además de una nueva propiedad denominada range y un nuevo método denominado charge.

Una clase encapsula datos para el objeto. Los datos y el comportamiento se incluyen en la clase, pero los detalles de ambos pueden quedar ocultos para la persona que trabaja con el objeto en código. Por ejemplo, si llama al método turn de un objeto Car, no necesita saber exactamente cómo funciona el volante, solo necesita saber que el coche girará a la izquierda cuando se lo indique. La clase sirve como una caja negra en la que todos los atributos y comportamientos solo se exponen a través de las propiedades y los métodos, limitando lo que un codificador puede hacer con ella.

## Componentes de clase

Las propiedades, también denominadas campos, son los datos (o atributos) del objeto. Estas son las características que definen el objeto y que puede establecer o devolver desde el código.

`constructor` es una función especial que se usa para crear e inicializar objetos basados en la clase. Cuando se crea una nueva instancia de la clase, el constructor crea un nuevo objeto con la forma de clase y lo inicializa con los valores que se le han pasado.
Los descriptores de acceso son un tipo de función que se usa para aplicar get o set al valor de las propiedades. Las propiedades pueden ser de solo lectura simplemente omitiendo el descriptor de acceso set en la clase, o inaccesibles omitiendo el descriptor de acceso get (la propiedad devolverá undefined si se intenta acceder a ella, incluso si se le asigna un valor durante la inicialización).

Los métodos son funciones que definen los comportamientos o acciones que puede realizar el objeto. Puede llamar a estos métodos para invocar el comportamiento del objeto. También se pueden definir métodos a los que solo se puede tener acceso desde dentro de la propia clase y a los que otros métodos de la clase llaman normalmente para realizar una tarea.


## Notas de diseño
Puede crear clases para modelar datos, encapsular funcionalidades o proporcionar plantillas, entre otras muchas opciones. Por lo tanto, los componentes enumerados anteriormente no son necesarios en cada clase que se cree. Puede que solo necesite métodos y un constructor para un objeto de utilidad, o únicamente propiedades para administrar los datos.
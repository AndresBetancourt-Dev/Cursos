# Consideraciones de diseño

TypeScript ofrece un par de formas clave para definir la estructura de los objetos: clases e interfaces. Tal vez se pregunte cuándo es mejor utilizar cada uno de ellos.

## Cuándo usar interfaces

Las interfaces son una construcción en tiempo de diseño de TypeScript. Dado que JavaScript no tiene un concepto de interfaces, se quitan cuando TypeScript se transpila en JavaScript. Esto significa que no tienen ningún peso, no ocupan espacio en el archivo resultante y no tienen ningún impacto negativo en el código que se ejecutará.

A diferencia de otros lenguajes de programación en los que las interfaces solo se pueden usar con clases, TypeScript permite usar una interfaz para definir una estructura de datos sin necesidad de una clase. Puede utilizar interfaces para definir objetos de parámetro para las funciones, definir la estructura de las distintas propiedades del marco y definir el aspecto de los objetos desde los servicios remotos o las API.

Si va a crear una aplicación de pila completa con implementaciones de cliente y de servidor, normalmente deberá definir cómo se estructurarán los datos. Si los datos en cuestión fueran para almacenar información sobre un perro, por ejemplo, podría crear una interfaz con el siguiente aspecto:

```ts
interface Dog {
  id?: number;
  name: string;
  age: number;
  description: string;
}
```

Esta interfaz se puede usar en un módulo compartido para el código de cliente y de servidor, asegurándose de que la estructura de datos es la misma en ambos lados. En el cliente, puede tener código para recuperar el perro de la API del servidor que defina, que se parece a lo siguiente:

```ts
async loadDog(id: number): Dog {
    return await (await fetch('demoUrl')).json() as Dog;
}
```

## Cuándo usar clases

La diferencia clave entre las interfaces y las clases en cualquier lenguaje de programación es que las clases permiten definir los detalles de la implementación. Las interfaces definen únicamente cómo se estructuran los datos. Las clases permiten definir métodos, campos y propiedades. Las clases también proporcionan una forma de crear plantillas de objetos, definiendo valores predeterminados.

Volviendo al ejemplo anterior, en el servidor puede que desee agregar código para cargar o guardar un perro en la base de datos. Una técnica común para administrar los datos en una base de datos es utilizar lo que se conoce como "patrón de registro activo", lo que significa que el propio objeto tiene save, load y métodos similares. Podemos utilizar la interfaz Dog definida anteriormente para asegurarnos de que tenemos las mismas propiedades y la misma estructura, al tiempo que agregamos el código necesario para realizar las operaciones.

```ts
class DogRecord implements Dog {
  id: number;
  name: string;
  age: number;
  description: string;

  constructor({ name, age, description, id = 0 }: Dog) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.description = description;
  }

  static load(id: number): DogRecord {
    // code to load dog from database
    return dog;
  }

  save() {
    // code to save dog to database
  }
}
```

## Resumen

Mientras utilice TypeScript, encontrará muchos nuevos casos en los que las interfaces, en particular, le facilitarán la vida como desarrollador. Una característica clave de TypeScript para recordar sobre las interfaces es que no requieren una clase. Por ello, puede utilizarlas siempre que necesite la capacidad de definir una estructura de datos sin tener que crear una implementación de clase completa.
